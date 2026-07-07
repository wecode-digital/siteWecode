'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Inter, Rethink_Sans } from 'next/font/google';
import styles from './TapumeNorden.module.scss';
import mountainsBg from '../../../public/assets/tapume-norden/mountains-bg.png';
import nordenLogo from '../../../public/assets/tapume-norden/norden-logo.png';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter' });
const rethinkSans = Rethink_Sans({ subsets: ['latin'], weight: ['600'], variable: '--font-rethink-sans' });

const DESTINO = 'https://norden.ec/';
const SECONDS = 8;

export default function TapumeNorden() {
  const [secondsLeft, setSecondsLeft] = useState(SECONDS);
  const [progress, setProgress] = useState(0);
  const lastRef = useRef<number | null>(null);

  useEffect(() => {
    let frameId: number;

    function tick(now: number) {
      if (lastRef.current === null) lastRef.current = now;
      const dt = (now - lastRef.current) / 1000;
      lastRef.current = now;

      setSecondsLeft((prev) => {
        const next = prev - dt;
        if (next <= 0) {
          window.location.href = DESTINO;
          return 0;
        }
        setProgress(Math.min(1, 1 - next / SECONDS) * 100);
        return next;
      });

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className={`${styles.stage} ${inter.variable} ${rethinkSans.variable}`}>
      <Image className={styles.mountains} src={mountainsBg} alt="" priority fill sizes="100vw" />
      <div className={styles.glow} />

      <div className={styles.topbar}>
        <Image src={nordenLogo} alt="Norden" height={26} />
      </div>

      <div className={styles.content}>
        <div className={styles.eyebrow}>Agora somos Norden</div>
        <h1>Unificamos nossas frentes para entregar um sistema completo para o seu e-commerce.</h1>
        <p className={styles.lede}>
          Wecode, Brava e Centric agora são Norden. Você será redirecionado automaticamente para o novo site.
        </p>

        <div className={styles.actions}>
          <a className={styles.cta} href={DESTINO}>
            Acessar o novo site<span>→</span>
          </a>
          <span className={styles.count}>
            Redirecionando em <b>{Math.ceil(secondsLeft)}</b>s
          </span>
        </div>

        <div className={styles.bar}>
          <i style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className={styles.fallback}>
        O redirecionamento não começou? <a href={DESTINO}>Acessar agora</a>
      </div>
    </div>
  );
}
