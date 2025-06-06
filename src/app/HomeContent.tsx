'use client';
import React from "react";

import Image from "next/image";
import styles from "./page.module.scss";
// import TestimonialSlider from "@/components/Depoimento-clientes/index";
import imagehome from "../../public/assets/images/home-generic-images/image-home.png";
import logopolitorno from "../../public/assets/images/client-logos/logo-politorno.png";
import logokappesberg from "../../public/assets/images/client-logos/logo-kappesberg.png";
import logokissny from "../../public/assets/images/client-logos/logo-kissNY.png";
import aboutUsImage from "../../public/assets/images/home-generic-images/about-us-image.png";
import conectingCel from "../../public/assets/images/home-generic-images/conecting-cel.png";

import CardContainer from "@/components/CardContainer";

import "@/components/svgs/Svgs";
//@ts-ignore
import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9, Svg10, Svg11, Svg12, Svg13, Svg14, Svg15, Svg16, Svg17, Svg18, Svg19, Svg20, Svg21, Svg22, Svg23, Svg24, Svg25, Svg26, Svg27, Svg28, Svg29, Svg30, Svg31, Svg32, Svg33, Svg34, Svg35, Svg36, Svg37, Svg38, Svg39, Svg40, Svg41, Svg42, Svg43, Svg44, Svg45, Svg46, Svg47, Svg48, Svg49, Svg50, Svg51, Svg52, Svg53, Svg54, Svg55 } from "@/components/svgs/Svgs";
import TestimonialSlider from "@/components/Depoimento-clientes";

export default function HomeContent({ isMobile }: { isMobile: boolean }) {

  function handleScrollToResults() {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  }


  return (
    <>
      {isMobile ? (
        <div className={styles.homeContainer}>
          <div className={styles.firstFold}>
            <h1 className={styles.blockTitle}>
              Valorizamos <span className={styles.textHighlight}>pessoas</span>
              <br></br> e impulsionamos{" "}
              <span className={styles.textHighlight}>negócios</span>
            </h1>
            <Image src={imagehome} alt="imagem-home"></Image>
            <p className={styles.firstFoldText}>
              A Wecode é certificada e homologada para revender, implantar e
              prestar suporte para as soluções de e-commerce da VTEX e Shopify
            </p>
          </div>
          <div className={styles.ourClients}>
            <div className={styles.ourClientContainer}>
              {" "}
              <h3 className={styles.tag}>NOSSOS CLIENTES</h3>
              <h2 className={styles.blockTitle}>
                Quem <span className={styles.textHighlight}>confia</span> em nosso
                trabalho e <span className={styles.textHighlight}>atesta</span>{" "}
                nossa qualidade
              </h2>
              <div className={styles.clientList}>
                <div>
                  <Svg55></Svg55>
                </div>
                <div>
                  <Image
                    width="80"
                    height="18"
                    src={logokappesberg}
                    alt="logo-kappesberg"
                  ></Image>
                </div>
                <div>
                  <Svg1 />
                </div>
                <div>
                  <Svg2 />
                </div>
                <div>
                  <Svg3 />
                </div>
                <div>
                  <Svg4 />
                </div>
                <div>
                  <Svg5 />
                </div>
                <div>
                  <Svg6 />
                </div>
                <div>
                  <Svg7 />
                </div>
                <div>
                  <Svg8 />
                </div>
                <div>
                  <Svg9 />
                </div>
                <div>
                  <Svg10 />
                </div>
                <div>
                  <Image
                    width="65"
                    height="25"
                    src={logokissny}
                    alt="logo-kiss-new-york"
                  ></Image>
                </div>
                <div>
                  <Svg11 />
                </div>
                <div>
                  <Svg12 />
                </div>
                <div>
                  <Svg13 />
                </div>
                <div>
                  <Svg14 />
                </div>
                <div>
                  <Svg15 />
                </div>
                <div>
                  <Svg16 />
                </div>
                <div>
                  <Svg17 />
                </div>
                <div>
                  <Svg18 />
                </div>
                <div>
                  <Svg19 />
                </div>
                <div>
                  <Svg20 />
                </div>
                <div>
                  <Svg21 />
                </div>
                <div>
                  <Svg22 />
                </div>
                <div>
                  <Svg23 />
                </div>
                <div>
                  <Svg24 />
                </div>
                <div>
                  <Svg32 />
                </div>
                <div>
                  <Svg33 />
                </div>
                {/* <div>
                  <Svg34 />
                </div> */}
                <div>
                  <Svg35 />
                </div>
                <div>
                  <Svg36 />
                </div>
                <div>
                  <Svg37 />
                </div>
                <div>
                  <Svg38 />
                </div>
                <div>
                  <Svg39 />
                </div>
                <div>
                  <Svg40 />
                </div>
                <div>
                  <Svg41 />
                </div>
                <div>
                  <Svg42 />
                </div>
                <div>
                  <Svg43 />
                </div>
                <div>
                  <Svg44 />
                </div>
                <div>
                  <Svg45 />
                </div>
                <div>
                  <Svg46 />
                </div>
                <div>
                  <Svg47 />
                </div>
                <div>
                  <Svg48 />
                </div>
                <div>
                  <Svg49 />
                </div>
                <div>
                  <Svg50 />
                </div>
                <div>
                  <Svg51 />
                </div>
                <div>
                  <Svg52 />
                </div>
                <div>
                  <Svg53 />
                </div>
                <div>
                  <Svg54 />
                </div>
              </div>
              <p
                className={styles.knowMoreLink}
                onClick={handleScrollToResults}
              >
                Saiba mais
              </p>
            </div>
          </div>
          <TestimonialSlider />
          <div className={styles.aboutUsMaster}>
            <div className={styles.aboutUs}>
              <div className={styles.aboutUsContainer}>
                {" "}
                <h2 className={styles.blockTitle}>
                  Soluções de <span style={{ whiteSpace: "nowrap" }}>E-commerce</span> para <span className={styles.textHighlight}>VTEX</span> e <span className={styles.textHighlight}>Shopify</span>
                </h2>
                <p className={styles.homeParagraph}>
                  VTEX e Shopify são plataformas completas, integradas e composable que geram experiências avançadas de comércio B2B, B2C, Crossborder, Marketplace e Omnichannel sem complicações e com total flexibilidade. Vá além do e-commerce tradicional, vendendo em todos os canais, colaborando com parceiros e expandindo sua oferta de produtos.
                </p>
                <Image
                  className={styles.conectingImage}
                  src={aboutUsImage}
                  width={400}
                  // height={100}
                  alt="sobre-nós"
                ></Image>
                <p className={styles.homeParagraph}>
                  <i>
                    A VTEX e a Shopify disponibilizam diversos recursos de forma nativa, cabendo a cada parceiro implantador habilitar, personalizar e até desenvolver recursos. A Wecode, através de sua metodologia e expertise, habilita e desenvolve funcionalidades que garantem uma experiência de compra única, gerando resultado e vendas para nossos clientes.
                  </i>
                </p>
                <p className={styles.homeParagraphHelp}>Nossos especialistas podem te ajudar a escolher a plataforma que melhor atende às necessidades do seu negócio.</p>
                <p className={styles.lightBackgroundQuote}>
                  "Com tanto mais do mesmo, entregamos o{" "}
                  <strong>diferente</strong>, o <strong>característico</strong>{" "}
                  e o <strong>melhor</strong> <br></br>
                  e-commerce que sua<br></br> marca pode ter."
                </p>
              </div>
            </div>
          </div>
          <div className={styles.howGenerateValueMaster}>
            <div className={styles.howGenerateValue}>
              <h3 className={styles.tag}>COMO GERAMOS VALOR</h3>
              <h2 className={styles.blockTitle}>
                Não somos uma <br></br>
                <span className={styles.textHighlight}> agência</span>
              </h2>
              <p className={styles.homeParagraph}>
                Possuimos uma metodologia própria de gestão de projetos, que tem
                como objetivos estratégicos os seguintes pilares.
              </p>
              <div className={styles.cardContrastBackground}>
                <div className={styles.ourServices}>
                  <div className={styles.ourServicesCard}>
                    <div className={styles.ourServicesCardSon}>
                      <Svg25 />
                      <h4 className={styles.ourServicesCardSonTitle}>TAILOR MADE</h4>
                      <p className={styles.ourServicesCardSonText}>Soluções de alta performance e qualidade, desenvolvendo projetos sob medida, sem o uso de templates e layouts pré definidos, explorando ao máximo os recursos da VTEX e Shopify. Cada projeto é muito importante para nós, você não será só mais um cliente.</p>
                    </div>
                    <div className={styles.ourServicesCardSon}>
                      <Svg26 />
                      <h4 className={styles.ourServicesCardSonTitle}>RECEITA</h4>
                      <p className={styles.ourServicesCardSonText}>
                        Definições de layout e funcionalidades que priorizem uma
                        experiência rápida, segura e intuitiva, adotando as
                        melhores técnicas de CRO & UX design. gerando resultado
                        e vendas.</p>
                    </div>
                    <div className={styles.ourServicesCardSon}>
                      <Svg27 />
                      <h4 className={styles.ourServicesCardSonTitle}>
                        GESTÃO DE PROJETOS
                      </h4>
                      <p className={styles.ourServicesCardSonText}>
                        Garantimos qualidade e satisfação através da nossa
                        metodologia própria e da dedicação de um squad único do
                        inicio ao fim, com a participação dos nossos fundadores.
                      </p>
                    </div>
                    <div className={styles.ourServicesCardSon}>
                      <Svg28 />

                      <h4 className={styles.ourServicesCardSonTitle}>
                        RELACIONAMENTOS
                      </h4>
                      <p className={styles.ourServicesCardSonText}>
                        Diálogos que constroem relacionamentos sólidos e
                        confiáveis, superando as expectativas e gerando valor
                        aos nossos clientes através de soluções e projetos
                        únicos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.methodology}>
                <h3 className={styles.tag}>O QUE FAZEMOS</h3>
                <h2 className={styles.blockTitle}>
                  Somos <span className={styles.textHighlight}>experts</span> nas
                  soluções de{" "}
                  <span className={styles.textHighlight}>e-commerce</span>
                </h2>
                <h3 className={styles.tag2}>Conheça os serviços que prestamos</h3>
                <div className={styles.methodologyCard}>
                  <Svg29 />

                  <h4 className={styles.methodologyCardTitle}>Implantação</h4>
                  <p className={styles.methodologyCardText}>
                    Desenvolvemos plataformas que geram experiencias avançadas
                    de comércio eletrônico B2B, B2C e Omnichannel sem
                    complicações e com total flexibilidade
                  </p>
                </div>
                <div className={styles.methodologyCard}>
                  <Svg30 />

                  <h4 className={styles.methodologyCardTitle}>Migração</h4>
                  <p className={styles.methodologyCardText}>
                    Migração da sua loja para o ecossistema VTEX e Shopify, garantindo uma transição tranquila e sem atritos ao cliente final
                  </p>
                </div>
                <div className={styles.methodologyCard}>
                  <Svg31 />

                  <h4 className={styles.methodologyCardTitle}>
                    Suporte e Evolução
                  </h4>
                  <p className={styles.methodologyCardText}>
                    Ciclos mensais de análise e evolução do seu canal de vendas
                    digital, através de planejamento e suporte contínuos.
                  </p>
                </div>
                <a
                  className={styles.knowMoreLink}
                  onClick={handleScrollToResults}
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (<>
        <div className={styles.homeContainerDesk}>
          {/* <VideoPlayer /> */}

          <div className={styles.firstFold}>
            <div className={styles.firstFoldTextContainer}>
              <h1 className={styles.blockTitle}>
                Valorizamos <span className={styles.textHighlight}>pessoas</span> e{" "}
                <br></br> impulsionamos{" "}
                <span className={styles.textHighlight}>negócios</span>
              </h1>
              <p className={styles.firstFoldText}>
                A Wecode é certificada e homologada para revender, implantar e
                prestar suporte para as soluções de e-commerce da VTEX e Shopify
              </p>
            </div>
            <div className={styles.firstFoldImgContainer}>
              <Image
                className={styles.firstFoldImg}
                src={imagehome}
                alt="first fold"
              ></Image>
            </div>
          </div>

          <div className={styles.ourClients}>
            <div className={styles.ourClientsContainer}>
              <h3 className={styles.tag}>NOSSOS CLIENTES</h3>
              <h2 className={styles.blockTitle}>
                Fazemos parte de um grupo que oferece diferentes{" "}
                <span className={styles.textHighlight}> soluções </span> para
                diferentes
                <span className={styles.textHighlight}> necessidades</span>,dentro
                do ecossistema do mercado digital.
                <span className={styles.textHighlight}>
                  Conheça nossos clientes
                </span>
              </h2>
              <div className={styles.clientList}>
                <div>
                  <Svg55></Svg55>
                </div>
                <div>
                  <Image
                    width="80"
                    height="18"
                    src={logokappesberg}
                    alt="logo-kappesberg"
                  ></Image>
                </div>
                <div>
                  <Svg1 />
                </div>
                <div>
                  <Svg2 />
                </div>
                <div>
                  <Svg3 />
                </div>
                <div>
                  <Svg4 />
                </div>
                <div>
                  <Svg5 />
                </div>
                <div>
                  <Svg6 />
                </div>
                <div>
                  <Svg7 />
                </div>
                <div>
                  <Svg8 />
                </div>
                <div>
                  <Svg9 />
                </div>
                <div>
                  <Svg10 />
                </div>
                <div>
                  <Image
                    width="65"
                    height="25"
                    src={logokissny}
                    alt="logo-kiss-new-york"
                  ></Image>
                </div>
                <div>
                  <Svg11 />
                </div>
                <div>
                  <Svg12 />
                </div>
                <div>
                  <Svg13 />
                </div>
                <div>
                  <Svg14 />
                </div>
                <div>
                  <Svg15 />
                </div>
                <div>
                  <Svg16 />
                </div>
                <div>
                  <Svg17 />
                </div>
                <div>
                  <Svg18 />
                </div>
                <div>
                  <Svg19 />
                </div>
                <div>
                  <Svg20 />
                </div>
                <div>
                  <Svg21 />
                </div>
                <div>
                  <Svg22 />
                </div>
                <div>
                  <Svg23 />
                </div>
                <div>
                  <Svg24 />
                </div>
                <div>
                  <Svg32 />
                </div>
                <div>
                  <Svg33 />
                </div>
                {/* <div>
                  <Svg34 />
                </div> */}
                <div>
                  <Svg35 />
                </div>
                <div>
                  <Svg36 />
                </div>
                <div>
                  <Svg37 />
                </div>
                <div>
                  <Svg38 />
                </div>
                <div>
                  <Svg39 />
                </div>
                <div>
                  <Svg40 />
                </div>
                <div>
                  <Svg41 />
                </div>
                <div>
                  <Svg42 />
                </div>
                <div>
                  <Svg43 />
                </div>
                <div>
                  <Svg44 />
                </div>
                <div>
                  <Svg45 />
                </div>
                <div>
                  <Svg46 />
                </div>
                <div>
                  <Svg47 />
                </div>
                <div>
                  <Svg48 />
                </div>
                <div>
                  <Svg49 />
                </div>
                <div>
                  <Svg50 />
                </div>
                <div>
                  <Svg51 />
                </div>
                <div>
                  <Svg52 />
                </div>
                <div>
                  <Svg53 />
                </div>
                <div>
                  <Svg54 />
                </div>
              </div>

              <p
                className={styles.knowMoreLink}
                // href={""}
                onClick={handleScrollToResults}
              >
                Saiba mais
                <svg
                  className={styles.knowMoreArrow}
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.50714 0.690607C5.44019 0.752599 5.38706 0.826354 5.35079 0.907616C5.31453 0.988879 5.29586 1.07604 5.29586 1.16407C5.29586 1.25211 5.31453 1.33927 5.35079 1.42053C5.38706 1.50179 5.44019 1.57555 5.50714 1.63754L7.85714 3.83149L0.714286 3.83149C0.524845 3.83149 0.343164 3.90175 0.20921 4.02681C0.075255 4.15187 0 4.32148 0 4.49834C0 4.67521 0.075255 4.84482 0.20921 4.96988C0.343164 5.09494 0.524845 5.1652 0.714286 5.1652H7.85714L5.50714 7.35915C5.44019 7.42114 5.38706 7.4949 5.35079 7.57616C5.31453 7.65742 5.29586 7.74458 5.29586 7.83262C5.29586 7.92065 5.31453 8.00781 5.35079 8.08907C5.38706 8.17034 5.44019 8.24409 5.50714 8.30608C5.64097 8.43029 5.82201 8.5 6.01071 8.5C6.19942 8.5 6.38046 8.43029 6.51429 8.30608L9.57857 5.43861C9.84685 5.18964 9.99841 4.8515 10 4.49834C9.99652 4.14751 9.84511 3.81208 9.57857 3.56475L6.51429 0.697274C6.3814 0.572182 6.20089 0.501266 6.01219 0.500017C5.82348 0.498767 5.64191 0.567286 5.50714 0.690607Z"
                    fill="white"
                  />
                </svg>
              </p>
            </div >
          </div >

          {/* A ideia é colocar os depoimentos aqui */}
          <TestimonialSlider />

          <div className={styles.aboutUs}>
            <div className={styles.aboutUsContainer}>
              <div className={styles.aboutUsTextContainer}>
                <h2 className={styles.blockTitle}>
                  Soluções de <span style={{ whiteSpace: "nowrap" }}>E-commerce</span><br></br>{" "}
                  para <span className={styles.textHighlight}>VTEX</span> e <span className={styles.textHighlight}>Shopify</span>
                </h2>
                <p className={styles.homeParagraph}>
                  VTEX e Shopify são plataformas completas, integradas e
                  composable que geram experiências avançadas de comércio B2B,
                  B2C, Crossborder, Marketplace e Omnichannel sem complicações e
                  com total flexibilidade. Vá além do e-commerce tradicional,
                  vendendo em todos os canais, colaborando com parceiros e
                  expandindo sua oferta de produtos.
                </p>
                <p className={styles.homeParagraph}>
                  <i>
                    A VTEX e a Shopify disponibilizam diversos recursos de forma
                    nativa, cabendo a cada parceiro implantador habilitar,
                    personalizar e até desenvolver recursos. A Wecode, através de
                    sua metodologia e expertise, habilita e desenvolve
                    funcionalidades que garantem uma experiência de compra
                    única, gerando resultado e vendas para nossos clientes.
                  </i>
                </p>
                <p className={styles.homeParagraphHelp}>Nossos especialistas podem te ajudar a escolher a plataforma que melhor atende às necessidades do seu negócio.</p>
              </div>
              <Image className={styles.conectingImg}
                src={aboutUsImage}
                width="1900"
                alt="sobre nós"
              ></Image>
            </div>
          </div >

          <div className={styles.howGenerateValue}>
            <div className={styles.howGenerateValueContainerTextFirst}>
              <p className={styles.lightBackgroundQuote}>
                “Com tanto mais do mesmo, entregamos o{" "}
                <strong>diferente</strong>, o <strong>característico</strong> e
                o <strong>melhor</strong> <br></br>
                e-commerce que sua<br></br> marca pode ter.”
              </p>
            </div>
            <div className={styles.howGenerateValueTextContainer}>
              <h3 className={styles.tag}>COMO GERAMOS VALOR</h3>
              <h2 className={styles.blockTitle}>
                Não somos uma <br></br>
                <span className={styles.textHighlight}> agência.</span>
              </h2>
              <p className={styles.homeParagraph}>
                Possuimos uma metodologia própria de gestão de projetos, que
                <br></br> tem como objetivos estratégicos os seguintes pilares.
              </p>
              <CardContainer />
            </div>
          </div>
          <div className={styles.methodology}>
            <h3 className={styles.tag}>O QUE FAZEMOS</h3>
            <h2 className={styles.blockTitle}>
              Somos <span className={styles.textHighlight}>experts</span> nas soluções<br></br>
              de <span className={styles.textHighlight}>e-commerce</span>
            </h2>
            <div className={styles.methodologyCardContainer}>
              <div className={`${styles.methodologyCardFirst} ${styles.methodologyCard}`}>
                <svg
                  width="65"
                  height="66"
                  viewBox="0 0 65 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="1.49829"
                    width="64"
                    height="64"
                    rx="4.5"
                    fill="#F7F7F7"
                  />
                  <path
                    d="M8.5 18.4983C8.5 16.5653 10.067 14.9983 12 14.9983H44C45.933 14.9983 47.5 16.5653 47.5 18.4983V36.4983C47.5 38.4313 45.933 39.9983 44 39.9983H12C10.067 39.9983 8.5 38.4313 8.5 36.4983V18.4983Z"
                    stroke="#0D98E6"
                  />
                  <rect
                    x="38.5"
                    y="25.9983"
                    width="18"
                    height="26"
                    rx="3.5"
                    fill="#F7F7F7"
                    stroke="#0D98E6"
                  />
                  <ellipse
                    cx="47.5"
                    cy="48.4983"
                    rx="1.5"
                    ry="1"
                    fill="#0D98E6"
                  />
                  <rect
                    x="0.5"
                    y="1.49829"
                    width="64"
                    height="64"
                    rx="4.5"
                    stroke="#ECECEC"
                  />
                </svg>
                <div className={styles.metodologyContainerText}>
                  <h4 className={styles.methodologyCardTitle}>Implantação</h4>
                  <p className={styles.methodologyCardText}>
                    Desenvolvemos plataformas que geram experiencias avançadas
                    de comércio eletrônico B2B, B2C e Omnichannel sem
                    complicações e com total flexibilidade
                  </p>
                  <p
                    className={styles.knowMoreLink}
                    // href="#"
                    onClick={handleScrollToResults}
                  >
                    Saiba mais
                    <svg
                      className={styles.knowMoreArrow}
                      width="10"
                      height="9"
                      viewBox="0 0 10 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.50714 0.690607C5.44019 0.752599 5.38706 0.826354 5.35079 0.907616C5.31453 0.988879 5.29586 1.07604 5.29586 1.16407C5.29586 1.25211 5.31453 1.33927 5.35079 1.42053C5.38706 1.50179 5.44019 1.57555 5.50714 1.63754L7.85714 3.83149L0.714286 3.83149C0.524845 3.83149 0.343164 3.90175 0.20921 4.02681C0.075255 4.15187 0 4.32148 0 4.49834C0 4.67521 0.075255 4.84482 0.20921 4.96988C0.343164 5.09494 0.524845 5.1652 0.714286 5.1652H7.85714L5.50714 7.35915C5.44019 7.42114 5.38706 7.4949 5.35079 7.57616C5.31453 7.65742 5.29586 7.74458 5.29586 7.83262C5.29586 7.92065 5.31453 8.00781 5.35079 8.08907C5.38706 8.17034 5.44019 8.24409 5.50714 8.30608C5.64097 8.43029 5.82201 8.5 6.01071 8.5C6.19942 8.5 6.38046 8.43029 6.51429 8.30608L9.57857 5.43861C9.84685 5.18964 9.99841 4.8515 10 4.49834C9.99652 4.14751 9.84511 3.81208 9.57857 3.56475L6.51429 0.697274C6.3814 0.572182 6.20089 0.501266 6.01219 0.500017C5.82348 0.498767 5.64191 0.567286 5.50714 0.690607Z"
                        fill="white"
                      />
                    </svg>
                  </p>
                </div>
                <Image src={conectingCel} alt="connection cel"></Image>
              </div >
              <div className={`${styles.methodologyCard} ${styles.methodologyCardSecondRow}`}>
                <svg
                  width="65"
                  height="66"
                  viewBox="0 0 65 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="1.49829"
                    width="64"
                    height="64"
                    rx="4.5"
                    fill="#F7F7F7"
                  />
                  <path
                    d="M32.5004 51.0013C30.2011 51.0073 27.9234 50.5571 25.7993 49.6769C23.6751 48.7966 21.7466 47.5038 20.1255 45.8731C19.5747 45.318 19.06 44.7281 18.5846 44.1072C18.4922 43.9849 18.4248 43.8457 18.3862 43.6974C18.3476 43.5491 18.3386 43.3946 18.3598 43.2429C18.3809 43.0911 18.4317 42.945 18.5092 42.8129C18.5868 42.6807 18.6897 42.5652 18.8119 42.4728C18.9341 42.3804 19.0734 42.313 19.2217 42.2744C19.37 42.2358 19.5244 42.2268 19.6762 42.2479C19.828 42.269 19.9741 42.3198 20.1062 42.3974C20.2383 42.475 20.3539 42.5778 20.4463 42.7001C20.8557 43.235 21.2989 43.7432 21.7731 44.2217C23.9429 46.3924 26.7203 47.8538 29.7383 48.4127C32.7563 48.9716 35.8728 48.6018 38.6762 47.352C41.4795 46.1022 43.8377 44.0313 45.4391 41.4129C47.0406 38.7946 47.81 35.7519 47.6457 32.687L48.8106 32.6118H49.9773C50.0976 34.9817 49.7347 37.3512 48.9108 39.5765C48.0868 41.8017 46.819 43.8362 45.1843 45.5562C43.5496 47.2762 41.5823 48.6459 39.4018 49.5819C37.2214 50.518 34.8733 51.0009 32.5004 51.0013Z"
                    fill="#0D98E6"
                  />
                  <path
                    d="M16.1893 35.54C15.8911 35.5397 15.6043 35.4252 15.3879 35.2201C15.1714 35.015 15.0417 34.7348 15.0254 34.4371C14.8346 30.9005 15.7214 27.3893 17.5686 24.3675C19.4158 21.3457 22.1365 18.9555 25.371 17.5128C28.6056 16.0702 32.2017 15.6429 35.6843 16.2876C39.1668 16.9322 42.3717 18.6185 44.8755 21.1234C45.1746 21.4219 45.4372 21.709 45.6993 22.0086C45.8006 22.1239 45.8783 22.2581 45.9277 22.4034C45.9772 22.5487 45.9975 22.7024 45.9874 22.8556C45.9774 23.0088 45.9372 23.1585 45.8692 23.2961C45.8012 23.4338 45.7067 23.5566 45.5911 23.6576C45.4755 23.7587 45.3411 23.8359 45.1956 23.8849C45.0501 23.9339 44.8964 23.9538 44.7432 23.9432C44.5901 23.9327 44.4405 23.8921 44.3031 23.8237C44.1657 23.7552 44.0431 23.6603 43.9424 23.5445C43.7145 23.2836 43.4872 23.034 43.2377 22.7845C41.069 20.611 38.2917 19.1468 35.2729 18.5856C32.2541 18.0245 29.1362 18.3927 26.3312 19.6417C23.5262 20.8907 21.1664 22.9616 19.5637 25.5807C17.9611 28.1997 17.191 31.2434 17.3554 34.3095C17.3723 34.6184 17.2657 34.9214 17.0592 35.1518C16.8527 35.3823 16.5632 35.5213 16.2543 35.5383C16.2326 35.5394 16.2109 35.54 16.1893 35.54Z"
                    fill="#0D98E6"
                  />
                  <path
                    d="M44.8748 23.9403H39.925C39.6156 23.9403 39.3188 23.8174 39.1 23.5986C38.8812 23.3798 38.7583 23.0831 38.7583 22.7736C38.7583 22.4642 38.8812 22.1675 39.1 21.9487C39.3188 21.7299 39.6156 21.607 39.925 21.607H43.7082V17.8238C43.7082 17.5144 43.8311 17.2176 44.0499 16.9988C44.2687 16.78 44.5654 16.6571 44.8748 16.6571C45.1843 16.6571 45.481 16.78 45.6998 16.9988C45.9186 17.2176 46.0415 17.5144 46.0415 17.8238V22.7736C46.0415 23.0831 45.9186 23.3798 45.6998 23.5986C45.481 23.8174 45.1843 23.9403 44.8748 23.9403Z"
                    fill="#0D98E6"
                  />
                  <path
                    d="M19.3014 49.5145C18.992 49.5145 18.6953 49.3916 18.4765 49.1728C18.2577 48.954 18.1348 48.6572 18.1348 48.3478V43.398C18.1348 43.0886 18.2577 42.7918 18.4765 42.5731C18.6953 42.3543 18.992 42.2313 19.3014 42.2313H24.2507C24.5601 42.2313 24.8569 42.3542 25.0757 42.573C25.2945 42.7918 25.4174 43.0886 25.4174 43.398C25.4174 43.7074 25.2945 44.0042 25.0757 44.223C24.8569 44.4418 24.5601 44.5647 24.2507 44.5647H20.4681V48.3478C20.4681 48.6572 20.3452 48.954 20.1264 49.1728C19.9076 49.3916 19.6109 49.5145 19.3014 49.5145Z"
                    fill="#0D98E6"
                  />
                  <rect
                    x="0.5"
                    y="1.49829"
                    width="64"
                    height="64"
                    rx="4.5"
                    stroke="#ECECEC"
                  />
                </svg>
                <div className={styles.metodologyContainerText}>
                  <h4 className={styles.methodologyCardTitle}>Migração</h4>
                  <p className={styles.methodologyCardText}>
                    Migração da sua loja para o ecossistema VTEX e
                    Shopify, garantindo uma transição tranquila e sem
                    atritos ao cliente final
                  </p>
                  <p
                    className={styles.knowMoreLink}
                    // href="#"
                    onClick={handleScrollToResults}
                  >
                    Saiba mais
                    <svg
                      className={styles.knowMoreArrow}
                      width="10"
                      height="9"
                      viewBox="0 0 10 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.50714 0.690607C5.44019 0.752599 5.38706 0.826354 5.35079 0.907616C5.31453 0.988879 5.29586 1.07604 5.29586 1.16407C5.29586 1.25211 5.31453 1.33927 5.35079 1.42053C5.38706 1.50179 5.44019 1.57555 5.50714 1.63754L7.85714 3.83149L0.714286 3.83149C0.524845 3.83149 0.343164 3.90175 0.20921 4.02681C0.075255 4.15187 0 4.32148 0 4.49834C0 4.67521 0.075255 4.84482 0.20921 4.96988C0.343164 5.09494 0.524845 5.1652 0.714286 5.1652H7.85714L5.50714 7.35915C5.44019 7.42114 5.38706 7.4949 5.35079 7.57616C5.31453 7.65742 5.29586 7.74458 5.29586 7.83262C5.29586 7.92065 5.31453 8.00781 5.35079 8.08907C5.38706 8.17034 5.44019 8.24409 5.50714 8.30608C5.64097 8.43029 5.82201 8.5 6.01071 8.5C6.19942 8.5 6.38046 8.43029 6.51429 8.30608L9.57857 5.43861C9.84685 5.18964 9.99841 4.8515 10 4.49834C9.99652 4.14751 9.84511 3.81208 9.57857 3.56475L6.51429 0.697274C6.3814 0.572182 6.20089 0.501266 6.01219 0.500017C5.82348 0.498767 5.64191 0.567286 5.50714 0.690607Z"
                        fill="white"
                      />
                    </svg>
                  </p >
                </div >
              </div >
              <div className={`${styles.methodologyCard} ${styles.methodologyCardSecondRow}`}>
                <svg
                  width="65"
                  height="66"
                  viewBox="0 0 65 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="1.49829"
                    width="64"
                    height="64"
                    rx="4.5"
                    fill="#F7F7F7"
                  />
                  <rect
                    x="15.5"
                    y="36.4983"
                    width="6"
                    height="14"
                    rx="3"
                    fill="#0D98E6"
                    stroke="#0D98E6"
                  />
                  <rect
                    x="29.5"
                    y="26.4983"
                    width="6"
                    height="24"
                    rx="3"
                    fill="#0D98E6"
                    stroke="#0D98E6"
                  />
                  <rect
                    x="43.5"
                    y="16.4983"
                    width="6"
                    height="34"
                    rx="3"
                    fill="#0D98E6"
                    stroke="#0D98E6"
                  />
                  <rect
                    x="0.5"
                    y="1.49829"
                    width="64"
                    height="64"
                    rx="4.5"
                    stroke="#ECECEC"
                  />
                </svg>
                <div className={styles.metodologyContainerText}>
                  <h4 className={styles.methodologyCardTitle}>
                    Suporte e Evolução
                  </h4>
                  <p className={styles.methodologyCardText}>
                    Ciclos mensais de análise e evolução do seu canal de vendas
                    digital, através de planejamento e suporte continuos.
                  </p>
                  <p
                    className={styles.knowMoreLink}
                    // href="#"
                    onClick={handleScrollToResults}
                  >
                    Saiba mais
                    <svg
                      className={styles.knowMoreArrow}
                      width="10"
                      height="9"
                      viewBox="0 0 10 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.50714 0.690607C5.44019 0.752599 5.38706 0.826354 5.35079 0.907616C5.31453 0.988879 5.29586 1.07604 5.29586 1.16407C5.29586 1.25211 5.31453 1.33927 5.35079 1.42053C5.38706 1.50179 5.44019 1.57555 5.50714 1.63754L7.85714 3.83149L0.714286 3.83149C0.524845 3.83149 0.343164 3.90175 0.20921 4.02681C0.075255 4.15187 0 4.32148 0 4.49834C0 4.67521 0.075255 4.84482 0.20921 4.96988C0.343164 5.09494 0.524845 5.1652 0.714286 5.1652H7.85714L5.50714 7.35915C5.44019 7.42114 5.38706 7.4949 5.35079 7.57616C5.31453 7.65742 5.29586 7.74458 5.29586 7.83262C5.29586 7.92065 5.31453 8.00781 5.35079 8.08907C5.38706 8.17034 5.44019 8.24409 5.50714 8.30608C5.64097 8.43029 5.82201 8.5 6.01071 8.5C6.19942 8.5 6.38046 8.43029 6.51429 8.30608L9.57857 5.43861C9.84685 5.18964 9.99841 4.8515 10 4.49834C9.99652 4.14751 9.84511 3.81208 9.57857 3.56475L6.51429 0.697274C6.3814 0.572182 6.20089 0.501266 6.01219 0.500017C5.82348 0.498767 5.64191 0.567286 5.50714 0.690607Z"
                        fill="white"
                      />
                    </svg>
                  </p>
                </div >
              </div >
            </div >
            <p
              className={styles.knowMoreLink}
              // href="#"
              onClick={handleScrollToResults}
            >
              Saiba mais
              <svg
                className={styles.knowMoreArrow}
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.50714 0.690607C5.44019 0.752599 5.38706 0.826354 5.35079 0.907616C5.31453 0.988879 5.29586 1.07604 5.29586 1.16407C5.29586 1.25211 5.31453 1.33927 5.35079 1.42053C5.38706 1.50179 5.44019 1.57555 5.50714 1.63754L7.85714 3.83149L0.714286 3.83149C0.524845 3.83149 0.343164 3.90175 0.20921 4.02681C0.075255 4.15187 0 4.32148 0 4.49834C0 4.67521 0.075255 4.84482 0.20921 4.96988C0.343164 5.09494 0.524845 5.1652 0.714286 5.1652H7.85714L5.50714 7.35915C5.44019 7.42114 5.38706 7.4949 5.35079 7.57616C5.31453 7.65742 5.29586 7.74458 5.29586 7.83262C5.29586 7.92065 5.31453 8.00781 5.35079 8.08907C5.38706 8.17034 5.44019 8.24409 5.50714 8.30608C5.64097 8.43029 5.82201 8.5 6.01071 8.5C6.19942 8.5 6.38046 8.43029 6.51429 8.30608L9.57857 5.43861C9.84685 5.18964 9.99841 4.8515 10 4.49834C9.99652 4.14751 9.84511 3.81208 9.57857 3.56475L6.51429 0.697274C6.3814 0.572182 6.20089 0.501266 6.01219 0.500017C5.82348 0.498767 5.64191 0.567286 5.50714 0.690607Z"
                  fill="white"
                />
              </svg>
            </p >
          </div >
        </div >
      </>
      )
      }
    </>
  );
}