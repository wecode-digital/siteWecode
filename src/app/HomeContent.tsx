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
import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9, Svg10, Svg11, Svg12, Svg13, Svg14, Svg15, Svg16, Svg17, Svg18, Svg19, Svg20, Svg21, Svg22, Svg23, Svg24, Svg25, Svg26, Svg27, Svg28, Svg29, Svg30, Svg31 } from "@/components/svgs/Svgs";
import TestimonialSlider from "@/components/Depoimento-clientes";

export default function HomeContent({isMobile}: { isMobile: boolean }) {

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
                <div className={styles.clientWrapper}>
                  <div>
                    <Image
                      width="81"
                      src={logopolitorno}
                      alt="logo-politorno"
                    ></Image>
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
                </div>
                <div className={styles.clientWrapper}>
                  <div>
                    <Svg2 />
                  </div>
                  <div>
                    <Svg3 />
                  </div>
                  <div>
                    <Svg4 />
                  </div>
                </div>
                <div className={styles.clientWrapper}>
                  <div>
                    <Svg5 />
                  </div>
                  <div>
                    <Svg6 />
                  </div>
                  <div>
                    <Svg7 />
                  </div>
                </div>
                <div className={styles.clientWrapper}>
                  <div>
                    <Svg8 />
                  </div>
                  <div>
                    <Svg9 />
                  </div>
                  <div>
                    <Svg10 />
                  </div>
                </div>
                <div className={styles.clientWrapper}>
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
                </div>
                <div className={styles.clientWrapper}>
                  <div>
                    <Svg13 />
                  </div>
                  <div>
                    <Svg14 />
                  </div>
                  <div>
                    <Svg15 />
                  </div>
                </div>
                <div className={styles.clientWrapper}>
                  <div>
                    <Svg16 />
                  </div>
                  <div>
                    <Svg17 />
                  </div>
                  <div>
                    <Svg18 />
                  </div>
                </div>
                <div className={styles.clientWrapper}>
                  <div>
                    <Svg19 />
                  </div>
                  <div>
                    <Svg20 />
                  </div>
                  <div>
                    <Svg21 />
                  </div>
                </div>
                <div className={styles.clientWrapper}>
                  <div>
                    <Svg22 />
                  </div>
                  <div>
                    <Svg23 />
                  </div>
                  <div>
                    <Svg24 />
                  </div>
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
                <div className={styles.clientWrapper}>
                  <div>
                    <Image width="81"
                      height="15"
                      src={logopolitorno}
                      alt="logo politorno"
                    ></Image>
                  </div>

                  <div>
                    <Image width="80"
                      height="18"
                      src={logokappesberg}
                      alt="logo kappesberg"
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
                </div>

                <div className={styles.clientWrapper}>
                  {/* Logo OU */}
                  <div>
                    <Svg4 />
                  </div>

                  {/* Logo LOTS */}
                  <div>
                    <Svg5 />
                  </div>

                  {/* Logo STIHL */}
                  <div>
                    <Svg6 />
                  </div>

                  {/* Logo RONYCHAVES */}
                  <div>
                    <Svg7 />
                  </div>

                  {/* Logo KEKO */}
                  <div>
                    <Svg8 />
                  </div>
                </div>

                <div className={styles.clientWrapper}>
                  {/* Logo ANSELMI*/}
                  <div>
                    <Svg9 />
                  </div>

                  {/* Logo NIINI */}
                  <div>
                    <Svg10 />
                  </div>

                  {/* Logo BIBI*/}
                  <div>
                    <Svg11 />
                  </div>

                  {/* Logo BEBECÊ*/}
                  <div>
                    <Svg12 />
                  </div>

                  {/* Logo FIERO */}
                  <div>
                    <Svg13 />
                  </div>
                </div>

                <div className={styles.clientWrapper}>
                  {/* Logo PITUCHINHUS */}
                  <div>
                    <Svg14 />
                  </div>

                  {/* Logo PERFUMARIA*/}
                  <div>
                    <Svg15 />
                  </div>

                  {/* Logo PICADDILY*/}
                  <div>
                    <Svg16 />
                  </div>

                  {/* Logo PETITE JOLIE */}
                  <div>
                    <Svg17 />
                  </div>

                  {/* Logo KATARZE */}
                  <div>
                    <Svg18 />
                  </div>
                </div>

                <div className={styles.clientWrapper}>
                  {/* Logo FABIOLAMOLINA */}
                  <div>
                    <Svg19 />
                  </div>

                  {/* Logo JORGEBISCHOFF */}
                  <div>
                    <Svg20 />
                  </div>

                  {/* Logo KISS */}
                  <div>
                    <Svg21 />
                  </div>

                  {/* Logo 3TENTOS*/}
                  <div>
                    <Svg22 />
                  </div>

                  {/* Logo BELASLETRAS*/}
                  <div>
                    {/* <Svg23/> */}
                  </div>
                </div>
                {/* CSS inline feito para ajustar a disposição desses dois logos adicionais */}
                <div className={styles.clientWrapper} style={{ justifyContent: "center" }}>

                  <div style={{ width: "20%" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="35" viewBox="0 0 61 35" fill="none">
                      <path d="M4.23263 31.687H2.17205V29.6168H0.989746V34.9082H2.17205V32.8235H4.23263V34.9082H5.42217V29.6168H4.23263V31.687Z" fill="#353A42" />
                      <path d="M10.7989 33.8271C9.93988 33.8271 9.26669 33.1612 9.26669 32.266C9.26669 31.3708 9.94711 30.6904 10.7989 30.6904C11.6506 30.6904 12.3238 31.3419 12.331 32.266C12.3383 33.1612 11.6651 33.8271 10.7989 33.8271ZM10.7989 29.525C9.23773 29.525 8.03613 30.7411 8.03613 32.2732C8.03613 33.8054 9.21119 34.9925 10.7916 34.9925C12.372 34.9925 13.5616 33.7813 13.5616 32.266C13.5616 30.7507 12.36 29.525 10.7989 29.525Z" fill="#353A42" />
                      <path d="M18.1902 32.0152H17.353V30.705H18.2699C18.7066 30.705 18.9286 31.0066 18.9286 31.3492C18.9286 31.6919 18.7283 32.0152 18.1902 32.0152ZM20.1447 31.3275C20.1447 30.4179 19.5583 29.6168 18.2771 29.6168H16.1731V34.9058H17.3554V33.0599H17.9345L18.972 34.9058H20.3473L19.124 32.8935C19.8479 32.5918 20.1471 31.9549 20.1471 31.3251" fill="#353A42" />
                      <path d="M22.3286 30.7557H23.8246V34.9082H25.0117V30.7557H26.5004V29.6168H22.3286V30.7557Z" fill="#353A42" />
                      <path d="M30.1371 29.6168H28.95V34.9058H30.1371V29.6168Z" fill="#353A42" />
                      <path d="M33.0452 34.9082H34.2251V32.8886H36.3797V31.7787H34.2251V30.734H36.6741V29.6168H33.0452V34.9082Z" fill="#353A42" />
                      <path d="M41.2479 32.0152H40.4106V30.705H41.3275C41.7642 30.705 41.9862 31.0066 41.9862 31.3492C41.9862 31.6919 41.7859 32.0152 41.2479 32.0152ZM43.2023 31.3275C43.2023 30.4179 42.616 29.6168 41.3347 29.6168H39.2307V34.9058H40.4106V33.0599H40.9897L42.0272 34.9058H43.4025L42.1792 32.8935C42.9031 32.5918 43.2023 31.9549 43.2023 31.3251" fill="#353A42" />
                      <path d="M48.9139 32.8669C48.9139 33.5401 48.5207 33.8538 47.9898 33.8538C47.459 33.8538 47.0585 33.5473 47.0585 32.8669V29.6168H45.8713V32.9176C45.8713 34.3918 46.8871 34.9999 47.9898 34.9999C49.0925 34.9999 50.1011 34.3918 50.1011 32.9176V29.6168H48.9139V32.8669Z" fill="#353A42" />
                      <path d="M52.4915 30.7557H53.9874V34.9082H55.177V30.7557H56.6657V29.6168H52.4915V30.7557Z" fill="#353A42" />
                      <path d="M60.2999 29.6168H59.1128V34.9058H60.2999V29.6168Z" fill="#353A42" />
                      <path d="M53.5296 16.9447V18.1053C53.3101 19.6085 51.5125 20.7401 49.3361 20.7401C47.6423 20.7401 46.6313 19.9825 46.6313 18.7133C46.6313 17.794 46.9836 16.9447 49.5315 16.9447H53.5296ZM60.6693 23.3242L60.3025 21.0127C60.2157 20.5664 59.7934 20.2623 59.3398 20.3203L59.1878 20.3396C58.6425 20.3854 58.5267 20.3178 58.4157 19.4179C58.3964 19.2634 58.3964 19.0994 58.3964 18.928V17.6492C58.4012 17.6251 58.4036 17.601 58.4036 17.5769V12.826C58.3698 8.75071 55.5709 6.31616 50.9213 6.31616C47.7846 6.31616 45.8543 7.02795 43.579 8.25608C43.164 8.48047 43.0023 9.00165 43.2195 9.42148L44.2739 11.4386C44.3825 11.6461 44.5659 11.7981 44.7927 11.8657C45.0195 11.9332 45.2535 11.9091 45.461 11.7957C47.0391 10.9223 48.5616 10.4783 49.9851 10.4783C51.6018 10.4783 53.532 10.9705 53.532 13.3134V13.4002H48.8511C44.5104 13.434 41.9214 15.5163 41.9214 18.9739C41.9214 22.4315 44.5611 24.7092 48.3372 24.7092C50.8876 24.7092 52.8975 23.8961 54.1522 22.3591C54.5768 23.0781 55.2283 23.6355 56.0873 24.0143C57.5639 24.6658 58.6256 24.6296 59.9623 24.3497C59.9768 24.3473 59.9889 24.3425 60.0033 24.34L60.0757 24.3159C60.4956 24.176 60.7489 23.7513 60.6717 23.3291" fill="#353A42" />
                      <path d="M34.7653 15.3474C34.7653 15.3474 34.7653 15.3547 34.7653 15.3571C34.7219 19.4999 31.3125 19.8232 30.2702 19.8232C29.486 19.8232 28.1565 19.6567 27.2131 19.3841V15.3619C27.2131 13.3279 28.4798 11.2673 30.9023 11.2673C32.0364 11.2673 33.0449 11.6678 33.7447 12.3965C34.4589 13.1397 34.8136 14.1603 34.7677 15.3474M32.2391 6.34755C30.0192 6.34755 28.3519 6.99901 27.1841 8.33089V0.8873C27.1841 0.607411 27.0562 0.354063 26.8318 0.187578C26.6074 0.0210922 26.3251 -0.0271652 26.0597 0.0548712L22.8916 1.02724C22.5225 1.14065 22.2764 1.47362 22.2764 1.85967V22.3591C22.2764 22.7138 22.4863 23.0299 22.812 23.165C25.1597 24.1326 27.5147 24.6392 29.8069 24.673C29.9155 24.673 30.0216 24.6754 30.1278 24.6754C33.0474 24.6754 35.4626 23.8334 37.1251 22.2288C38.802 20.6122 39.6779 18.2911 39.7237 15.3329C39.7744 12.3845 38.9806 9.99334 37.4315 8.41535C36.1213 7.08346 34.2779 6.34755 32.2391 6.34755Z" fill="#353A42" />
                      <path d="M10.0404 20.4119C7.31866 20.4119 5.48971 18.4527 5.48971 15.538C5.48971 12.6233 7.31866 10.664 10.0404 10.664C12.7621 10.664 14.5259 12.6691 14.5259 15.538C14.5259 18.4068 12.68 20.4119 10.0404 20.4119ZM10.0404 6.33542C4.34361 6.33542 0.514404 10.0078 0.514404 15.4728C0.514404 20.9379 4.34119 24.673 10.0404 24.673C12.791 24.673 15.1532 23.7947 16.8687 22.1298C18.5891 20.4602 19.5012 18.1583 19.5012 15.4704C19.5012 12.7825 18.5915 10.512 16.8687 8.85442C15.1532 7.20404 12.7934 6.33301 10.0404 6.33301" fill="#353A42" />
                      <path d="M7.67555 5.60924C6.93481 5.73712 6.20613 5.75401 5.48951 5.49584C4.86699 5.27145 4.36512 4.88056 3.98871 4.35215C3.60265 3.80927 3.26244 3.2326 2.91499 2.66317C2.55306 2.06479 2.2032 1.45675 1.68926 0.971773C1.47934 0.77392 1.23323 0.605022 0.991943 0.404757C1.21151 0.344436 1.43108 0.276875 1.641 0.226206C2.80882 -0.053683 3.97664 -0.116415 5.12999 0.284115C6.57529 0.785985 7.53802 1.79696 8.1147 3.19399C8.38011 3.83581 8.51764 4.50658 8.46214 5.2063C8.45732 5.27144 8.44526 5.33659 8.43319 5.43069C8.43319 5.43069 7.9289 5.56822 7.67555 5.61165" fill="#353A42" />
                      <path d="M10.0266 5.38483C10.3885 5.38483 10.7456 5.39931 11.0955 5.42826C11.3006 3.80201 11.9593 2.5208 13.0065 1.71973C13.1874 1.57979 13.2453 1.33609 13.1416 1.14065L12.6928 0.247905C12.6349 0.139327 12.5384 0.0572903 12.4201 0.0210978C12.3043 -0.0150948 12.1789 -0.00303074 12.0727 0.0548773C10.4392 0.940388 9.29308 2.9165 8.93115 5.43067C9.29067 5.40172 9.65501 5.38724 10.0266 5.38724" fill="#353A42" />
                    </svg>
                  </div>
                  <div style={{ width: "20%" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="123" height="35" viewBox="0 0 123 35" fill="none">
                      <path d="M8.55096 29.0643L9.92446 19.9254H7.17746L5.80396 29.0643H0.043457L3.40546 6.54199H9.16596L7.95646 14.598H10.7035L11.913 6.54199H17.6735L14.3115 29.0643H8.55096Z" fill="#353A42" />
                      <path d="M26.5295 6.15222C32.372 6.15222 33.7455 12.3025 32.9255 17.8032C32.1055 23.3038 28.887 29.4541 23.0445 29.4541C17.202 29.4541 15.8285 23.3038 16.6485 17.8032C17.4685 12.3025 20.687 6.15222 26.5295 6.15222ZM23.9055 23.7802C26.0785 23.7802 26.8575 19.2108 27.0625 17.8032C27.2675 16.3955 27.862 11.8261 25.689 11.8261C23.516 11.8261 22.737 16.3955 22.532 17.8032C22.327 19.2108 21.7325 23.7802 23.9055 23.7802Z" fill="#353A42" />
                      <path d="M37.0049 29.0643H31.9004L35.2624 6.54199H40.7359L43.3189 20.0987L43.3804 20.0337L45.1844 6.54199H50.2889L46.9269 29.0643H41.3919L39.0344 16.0707L38.9729 16.1356" fill="#353A42" />
                      <path d="M51.5805 6.54199H62.302L61.5025 11.8477H56.562L56.07 14.9879H60.498L59.6985 20.2936H55.2705L54.758 23.7369H59.6985L58.899 29.0426H48.1775L51.5805 6.54199Z" fill="#353A42" />
                      <path d="M63.9829 29.0644L65.4179 19.514L62.0969 6.56372H68.0829L69.0259 13.5153H69.0874L72.1419 6.56372H78.1074L71.1989 19.514L69.7639 29.0644H63.9829Z" fill="#353A42" />
                      <path d="M89.444 6.54199H96.2295C99.612 6.54199 103.343 8.10123 102.626 12.9522C102.257 15.4859 100.391 17.4566 97.972 17.4566V17.5216C100.76 17.7598 101.99 19.6222 101.539 22.6324C101.129 25.4044 98.997 29.0426 93.8515 29.0426H86.1025L89.444 6.54199ZM93.052 24.1917C94.323 24.1917 95.553 23.542 95.7785 22.0044C96.004 20.4885 94.9995 19.8605 93.667 19.8605H93.216L92.56 24.1917H93.052ZM94.241 15.291C95.43 15.291 96.5985 14.7929 96.824 13.3203C97.029 11.9777 96.2295 11.4146 95.0405 11.4146H94.4665L93.8925 15.291H94.241Z" fill="#353A42" />
                      <path d="M104.799 6.54199H115.52L114.721 11.8477H109.78L109.309 14.9879H113.737L112.937 20.2936H108.509L107.997 23.7369H112.937L112.138 29.0426H101.416L104.799 6.54199Z" fill="#353A42" />
                      <path d="M117.898 34.5H79.1938L84.0524 0.5H122.756L117.898 34.5ZM79.9113 33.8503H117.365L122.039 1.14968H84.5854L79.9113 33.8503Z" fill="#353A42" />
                    </svg>
                  </div>
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