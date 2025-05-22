'use client';

import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import styles from './index.module.scss';
import Image from "next/image";

//Profile pic
import felipeFarina from "../../../public/assets/images/client-profile-pics/felipe-carraro-photo.png";
import priscilaBaum from "../../../public/assets/images/client-profile-pics/priscila-baum-photo.png";
import giulianoBettanin from "../../../public/assets/images/client-profile-pics/giuliano-inbetta.png";
import viniciusMartini from "../../../public/assets/images/client-profile-pics/vinicius-ou-photo.png";
import alanRosanelli from "../../../public/assets/images/client-profile-pics/alan-bibi-photo.png"; 
import priscilaAnselmiPhoto from "../../../public/assets/images/client-profile-pics/priscila-anselmi-photo.png"
import liliamKekoPhoto from "../../../public/assets/images/client-profile-pics/liliam-keko-photo.png";
import svenStihlPhoto from "../../../public/assets/images/client-profile-pics/sven-stihl-photo.png";
import ezequielJbPhoto from "../../../public/assets/images/client-profile-pics/ezequiel-jb-photo.png";
import vanessaStihlPhoto from "../../../public/assets/images/client-profile-pics/liliam-keko-photo.png";
import djeniferJbPhoto from "../../../public/assets/images/client-profile-pics/liliam-keko-photo.png";


//Videos

import felipeHorizontal from "../../../public/assets/videos/depoimentos/felipe-carraro-horizontal.mp4";
import felipeVertical from "../../../public/assets/videos/depoimentos/felipe-carraro-vertical.mp4";

import priscilaHorizontal from "../../../public/assets/videos/depoimentos/priscila-piccaddily-horizontal.mp4";
import priscilaVertical from "../../../public/assets/videos/depoimentos/priscila-piccaddily-vertical.mp4";

import giulianoHorizontal from "../../../public/assets/videos/depoimentos/giuliano-bettanin-horizontal.mp4";
import giulianoVertical from "../../../public/assets/videos/depoimentos/giuliano-bettanin-vertical.mp4";

import viniciusHorizontal from "../../../public/assets/videos/depoimentos/vinicius-ou-horizontal.mp4";
import viniciusVertical from "../../../public/assets/videos/depoimentos/vinicius-ou-vertical.mp4";

import priscilaAnselmi from "../../../public/assets/videos/depoimentos/priscila-anselmi-depoimento.mp4";

import liliamKeko from "../../../public/assets/videos/depoimentos/liliam-keko-depoimento.mp4";

import alanBibi from "../../../public/assets/videos/depoimentos/alan-bibi-depoimento.mp4";

import svenStihl from "../../../public/assets/videos/depoimentos/sven-vanessa-stihl.mp4";

import ezequielJb from "../../../public/assets/videos/depoimentos/ezequiel-jorgebischoff.mp4";
// import svenVanessa from '../../../public/assets/videos/depoimentos/DepoimentoSveneVanessa.mp4'
import depoimentoJb from '../../../public/assets/videos/depoimentos/DepoimentoJBV2.mp4'

//svg
import playDepoimentos from "../../../public/assets/svg/play.svg"
import fecharModal from "../../../public/assets/svg/fechar-modal.svg"
import arrowEsquerda from "../../../public/assets/svg/left-arrow.svg"
import arrowDireita from "../../../public/assets/svg/right-arrow.svg"
import logoJb from "../../../public/assets/svg/play.svg"
import logoStihl from "../../../public/assets/svg/play.svg"

//Ordem dos depoimentos (Mais podem ser adicionados da mesma maneira)
const testimonials = [
  //  {
  //   type: 'double',
  //   logo: logoStihl,
  //   testimonial: '&quotDe 22 pra 23, <span>a gente cresceu mais de 100%</span> e isso é muito fruto desse trabalho feito a quatro mãos junto com a Wecode.&quot',
  //   people: [
  //     {
  //       id: 'sven',
  //       name: 'Sven Laure',
  //       position: 'Head of Marketing Systems & E-Commerce',
  //       image: svenStihlPhoto,
  //     },
  //     {
  //       id: 'vanessa',
  //       name: 'Vanessa Spall',
  //       position: 'Analista de E-commerce',
  //       image: vanessaStihlPhoto,
  //     }
  //   ],
  //   video: {
  //     horizontal: svenVanessa,
  //     vertical: svenVanessa,
  //   }
  // },
  // {
  //   type: 'double',
  //   logo: logoJb,
  //   testimonial: '&quotLorem Ipsum is simply dummy text of the printing and typesetting industry.&quot',
  //   people: [
  //     {
  //       id: 'ezequiel',
  //       name: 'Ezequiel Fisher',
  //       position: 'Coordenador de TI',
  //       image: ezequielJbPhoto,
  //     },
  //     {
  //       id: 'djenifer',
  //       name: 'Djenifer',
  //       position: 'Coordenadora de E-commerce',
  //       image: djeniferJbPhoto,
  //     }
  //   ],
  //   video: {
  //     horizontal: depoimentoJb,
  //     vertical: depoimentoJb
  //   }
  // },
  {
    name: 'Alan Rosanelli',
    position: 'Gerente de Omnicanalidade da Bibi',
    image: alanRosanelli,
    testimonial: '&quotDe 22 pra 23, <span>a gente cresceu mais de 100%</span> e isso é muito fruto desse trabalho feito a quatro mãos junto com a Wecode.&quot',
    video: {
      horizontal: alanBibi,
      vertical: alanBibi,
    }
  },
  {
    name: 'Priscila',
    position: 'Supervisora de E-commerce da Anselmi',
    image: priscilaAnselmiPhoto,
    testimonial: '&quotCom certeza, o que a gente está colhendo hoje no nosso e-commerce é muito <span>fruto do que a Wecode fez pela gente</span>.&quot',
    video: {
      horizontal: priscilaAnselmi,
      vertical: priscilaAnselmi,
    }
  },
  {
    name: 'Liliam Mantovani',
    position: 'Gerente de Marketing da Keko',
    image: liliamKekoPhoto,
    testimonial: '&quotUma das coisas que eu mais gosto na Wecode é que eu acho que <span>eu nunca ouvi um não</span>.&quot',
    video: {
      horizontal: liliamKeko,
      vertical: liliamKeko,
    }
  },
  {
    name: 'Felipe Farina',
    position: 'Gerente de E-commerce da Carraro',
    image: felipeFarina,
    testimonial: '&quotEles nos ajudaram bastante no processo, desde o início. E seguem nos ajudando ainda hoje na parte de <span>melhorias e novos recursos</span> para ter, cada vez mais, uma <span>navegação melhor</span> do nosso consumidor.&quot',
    video: {
      horizontal: felipeHorizontal,
      vertical: felipeVertical,
    }
  },
  {
    name: 'Priscila Baum',
    position: 'Gerente de E-commerce da PICCADILLY',
    image: priscilaBaum,
    testimonial: '&quotA parceria com a Wecode foi assertiva. No primeiro ano, a gente já pôde notar um <span>crescimento do canal digital</span> e o trabalho continua crescendo, sempre em desenvolvimento, com todos os <span>times super integrados</span>.&quot',
    video: {
      horizontal: priscilaHorizontal,
      vertical: priscilaVertical,
    }
  },
  {
    name: 'Giuliano Bettanin',
    position: 'Gestor dos Canais Digitais da InBetta',
    image: giulianoBettanin,
    testimonial: '&quotA gente tem uma atenção especial, consegue conversar com os funcionários, tem uma <span>abertura</span> muito boa. Diria que temos um contato mais recorrente. Eles passam muita segurança no que falam e <span>é um parceiro que a gente pode contar</span>.&quot',
    video: {
      horizontal: giulianoHorizontal,
      vertical: giulianoVertical,
    }
  },
  {
    name: 'Vínicius Martini',
    position: 'Gerente de Marketing da Martiplast',
    image: viniciusMartini,
    testimonial: '&quotO parceiro veio, nos ouviu, entendeu o que era importante e, através dos seus recursos, nos entregou um projeto que, hoje, <span>é uma extensão da nossa marca</span>. É um espaço dentro do mundo digital onde a gente pode mostrar os nossos produtos com qualidade, pode <span>transmitir a nossa mensagem</span>.&quot',
    video: {
      horizontal: viniciusHorizontal,
      vertical: viniciusVertical,
    }
  },
  {
    name: 'Sven Laure',
    position: 'Head of Marketing Systems & E-Commerce',
    image: svenStihlPhoto,
    testimonial: '&quotAtrás da Wecode, há um <span>grande time</span> de pessoas excelentes que, em todos os momentos, com muito entusiasmo, <span>abraçaram esse projeto</span> e deram o máximo para fazer ele acontecer.&quot',
    video: {
      horizontal: svenStihl,
      vertical: svenStihl,
    }
  },
  {
    name: 'Ezequiel Fischer',
    position: 'Coordenador de TI',
    image: ezequielJbPhoto,
    testimonial: '&quotA Wecode tem uma preocupação não só com a entrega do projeto, <span>mas com a empresa</span>.&quot',
    video: {
      horizontal: ezequielJb,
      vertical: ezequielJb,
    }
  },
];

export const TestimonialSlider = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Estado para armazenar o índice do vídeo atual
  const [videoSrc, setVideoSrc] = useState('');
  const [isMobile, setIsMobile] = useState(true);
  const sliderRef = useRef(null); // Referência para o slider

  React.useEffect(() => {
    if (window && window.innerWidth >= 1024) {
      setIsMobile(false);
    }
  }, []);

  const openModal = (index) => {
    setCurrentVideoIndex(index);
    const videoUrl = isMobile
      ? testimonials[index].video.vertical
      : testimonials[index].video.horizontal;
    setVideoSrc(videoUrl);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    if (!sliderRef || !sliderRef.current) return;
    //@ts-ignore
    sliderRef.current.slickGoTo(currentVideoIndex); // Vai pro slide do vídeo atual
    setVideoSrc('');
  }

  const handlePrevious = () => {
    const newIndex = currentVideoIndex > 0 ? currentVideoIndex - 1 : testimonials.length - 1;
    setCurrentVideoIndex(newIndex);
    const videoUrl = isMobile
      ? testimonials[newIndex].video.vertical
      : testimonials[newIndex].video.horizontal;
    setVideoSrc(videoUrl);
  };

  const handleNext = () => {
    const newIndex = (currentVideoIndex + 1) % testimonials.length;
    setCurrentVideoIndex(newIndex);
    const videoUrl = isMobile
      ? testimonials[newIndex].video.vertical
      : testimonials[newIndex].video.horizontal;
    setVideoSrc(videoUrl);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    centerMode: true,
    dots: true,
    centerPadding: '20px',
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '60px',
          slidesToShow: 1.02,
          centerMode: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className={styles.testimonyMainContainer}>
      <div className={styles.testimonyTitlesContainer}>
        <h2 className={styles.testimonyTitle}>Depoimentos</h2>
        <h3 className={styles.testimonySubtitle}>Quem confia no nosso trabalho e atesta nossa qualidade</h3>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialSlide}>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialProfile}>
                {/* <div><Image src={testimonial.logo} alt="Logo" className={styles.testimonialLogoImage} /></div> */}
                {testimonial.type === 'double' ? (
                  <div className={styles.testimonialLogo}>
                    <Image src={testimonial.people[0].image} alt="Logo" className={styles.testimonialLogoImage} />
                    <Image src={testimonial.people[1].image} alt="Logo" className={styles.testimonialLogoImage} />
                  </div>
                ) : (
                  <Image src={testimonial?.image ?? ''} alt={testimonial?.name ?? ''} className={styles.testimonialImage} />
                )
              }
                <div className={styles.testimonialNamePosition}>
                  <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                  <p className={styles.testimonialPosition}>{testimonial.position}</p>
                </div>
              </div>
              <div className={styles.testimonialDescription}>
                <p className={styles.testimonialDescriptionContent} dangerouslySetInnerHTML={{ __html: testimonial.testimonial }} />
              </div>
              <div className={styles.testimonialVideo}>
                <button onClick={() => openModal(index)} className={styles.testimonialButtonVideo}>
                  Assistir depoimento <Image src={playDepoimentos} className={styles.testimonialVideoArrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        contentLabel="Vídeo do Depoimento"
      >
        <div
          className={styles.modalContentInner}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={closeModal} className={styles.modalCloseButton}><Image src={fecharModal} alt="" /></button>
          <div className={styles.modalNavigation}>
            <button onClick={handlePrevious} className={styles.modalArrowLeft}><Image src={arrowEsquerda} alt="" /></button>
            <iframe
              src={videoSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Depoimento em Vídeo"
            ></iframe>
            <button onClick={handleNext} className={styles.modalArrowRight}><Image src={arrowDireita} alt="" /></button>
          </div>
        </div>
      </Modal>
    </div>
  );
};


export default TestimonialSlider;