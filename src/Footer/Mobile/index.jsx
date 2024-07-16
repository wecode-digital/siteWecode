import React from "react";
import "./sass/styles.css";
import MyForm from "../formPost/index";
import wecodeImg from "../../assets/images/home-generic-images/wecode-footer.png";

function FooterMob() {
  let isMobile = false;
  if (window.innerWidth <= 1024) {
    isMobile = true;
  }

  function handleScrollToSection(selector, offset = 80) {
    //console.log(offset, "AQUIIIITESTETESTE");
    const section = document.querySelector(selector);
    if (section) {
      const topOffset = section.offsetTop - offset;
      // console.log(section.offsetTop, "TESTEAQUIIII");
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  }

  function addClickEventToButton(buttonClass, sectionClass) {
    const button = document.querySelector(buttonClass);
    if (button) {
      button.addEventListener("click", function () {
        handleScrollToSection(sectionClass);
      });
    }
  }

  addClickEventToButton("link-clients");
  addClickEventToButton("link-about-us");
  addClickEventToButton("link-value");
  addClickEventToButton("link-methodology");
  addClickEventToButton("link-contato");

  // function handleScrollToResults() {
  //   const teste = document.querySelector("footer");
  //   console.log("teste", teste);
  //   teste.scrollIntoView({ behavior: "smooth" });
  // }
  return (
    <>
      {isMobile ? (
        <footer>
          <div className={"footer-container"}>
            <div className={"footer-container-form-bg"}>
              <div className={"footer-container-form-bg-circle-1"} />
              <div className={"footer-container-form-bg-circle-2"} />
              <div className={"footer-container-form-bg-circle-3"} />
              <div className={"footer-container-form-bg-circle-4"} />
              <div className={"footer-container-form-container"}>
                <p className={"tag"}>CONTATO</p>
                <h4 className={"block-title"}>
                  Vamos <span className={"text-highlight"}>conversar!</span>
                </h4>
                <p className={"home-paragraph"}>
                  Preencha o formulário abaixo para entrar em contato, ou pelos
                  outros meios de comunicações abaixo.
                </p>
                <MyForm />
              </div>
            </div>
            <div className={"footer-container-links"}>
              <ul>
                <li>
                  <ul>
                    E-MAIL
                    <li>
                      <a href="mailto:ola@wecode.digital">ola@wecode.digital</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    TELEFONE
                    <li>
                      <a href="tel:+555422220235">+55 (54) 2222-0235</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    ENDEREÇO
                    <li>
                      <a href="https://www.google.com/maps/place/Wecode+%7C+Tecnologia+para+E-commerce/@-29.1716095,-51.1729341,19z/data=!3m1!4b1!4m6!3m5!1s0x951ebd7ad265e52d:0x4de4320de63ee8cc!8m2!3d-29.1716095!4d-51.1723869!16s%2Fg%2F11kp8jwvdb">
                        R. Olavo Bilac, 503 - Sala 4 - Rio Branco, Caxias do Sul - RS, 95010-080
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    CONECTE-SE
                    <div className={"social-media"}>
                      <li>
                        <a href="https://www.instagram.com/wecode.digital/">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.8145 1.34912H6.83182C3.61069 1.34912 1 3.96027 1 7.18094V17.1637C1 20.3848 3.61115 22.9955 6.83228 22.9955H16.8141C20.0352 22.9955 22.6464 20.3843 22.6464 17.1632V7.18094C22.6464 3.95981 20.0352 1.34912 16.8141 1.34912H16.8145Z"
                              stroke="#0D98E6"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M11.8232 17.3974C14.709 17.3974 17.0483 15.0581 17.0483 12.1723C17.0483 9.28661 14.709 6.94727 11.8232 6.94727C8.93749 6.94727 6.59814 9.28661 6.59814 12.1723C6.59814 15.0581 8.93749 17.3974 11.8232 17.3974Z"
                              stroke="#0D98E6"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M17.7619 6.1361C18.1563 6.1361 18.4759 5.81641 18.4759 5.42205C18.4759 5.0277 18.1563 4.70801 17.7619 4.70801C17.3675 4.70801 17.0479 5.0277 17.0479 5.42205C17.0479 5.81641 17.3675 6.1361 17.7619 6.1361Z"
                              fill="#0D98E6"
                            />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.facebook.com/wecode.digital">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.1416 0.677246C5.80396 0.677246 0.646484 5.83472 0.646484 12.1724C0.646484 18.51 5.80396 23.6675 12.1416 23.6675C18.4792 23.6675 23.6367 18.51 23.6367 12.1724C23.6367 5.83472 18.4792 0.677246 12.1416 0.677246ZM12.1416 2.0034C17.4437 2.0034 22.1592 6.87024 22.1592 12.1724C22.1616 14.4656 21.1117 17.0982 19.6148 18.8355C18.1179 20.5728 15.8354 21.9329 13.567 22.2696V14.9657H16.2952L16.7234 12.1944H13.567V10.6809C13.567 9.53136 13.9454 8.50925 15.0211 8.50925H16.7502V6.09145C16.4465 6.05026 15.8038 5.96117 14.5891 5.96117C12.0525 5.96117 10.5658 7.30035 10.5658 10.3523V12.1944H7.95834V14.9657H10.5658V22.2457C8.32882 21.8775 5.97068 20.363 4.50453 18.6338C3.03838 16.9046 2.02801 14.4395 2.03061 12.1724C2.03061 6.87024 6.83948 2.0034 12.1416 2.0034Z"
                              fill="#0D98E6"
                            />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.linkedin.com/company/wecodedigital?original_referer=https%3A%2F%2Fwww.wecode.digital%2F">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_410_11806)">
                              <path
                                d="M5.04199 9.56982H8.38259V19.62H5.04199V9.56982Z"
                                fill="#0D98E6"
                              />
                              <path
                                d="M6.68975 8.198H6.71178C7.87718 8.198 8.60186 7.42596 8.60186 6.46101C8.57982 5.4748 7.87718 4.72461 6.73362 4.72461C5.59026 4.72461 4.84277 5.4748 4.84277 6.46101C4.84277 7.42596 5.56919 8.198 6.68975 8.198Z"
                                fill="#0D98E6"
                              />
                              <path
                                d="M13.5714 19.6202V14.0072C13.5714 13.706 13.5944 13.4076 13.6824 13.1928C13.9242 12.5917 14.473 11.971 15.3966 11.971C16.6058 11.971 17.0887 12.8928 17.0887 14.2432V19.62H20.4301V13.8568C20.4301 10.77 18.7818 9.33398 16.583 9.33398C14.808 9.33398 14.0154 10.3109 13.5714 10.994V11.0269H13.5496C13.5554 11.0161 13.5649 11.0051 13.5714 10.994V9.57H10.2295C10.2743 10.5127 10.2295 19.62 10.2295 19.62H13.5714V19.6202Z"
                                fill="#0D98E6"
                              />
                              <path
                                d="M23.6061 4.28424C23.4753 3.58892 23.2192 2.95494 22.8633 2.44578C22.5075 1.93662 22.0644 1.57012 21.5785 1.38299C20.2504 0.648846 7.38452 0.289166 3.65181 1.40352C3.16579 1.59072 2.72268 1.95734 2.36683 2.46666C2.01098 2.97597 1.75488 3.61012 1.62419 4.3056C1.02445 8.0691 0.979113 16.2054 1.63911 20.0535C1.76989 20.7488 2.02603 21.3828 2.38187 21.892C2.73771 22.4011 3.18078 22.7676 3.66673 22.9548C6.29696 23.8211 18.8013 23.9427 21.5934 22.9548C22.0793 22.7676 22.5224 22.4011 22.8782 21.892C23.2341 21.3828 23.4902 20.7488 23.621 20.0535C24.2603 15.9533 24.3057 8.3212 23.6061 4.28424V4.28424Z"
                                stroke="#0D98E6"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_410_11806">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0.636719 0.172363)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li>
                  <ul>
                    EXPLORE
                    <li>
                      <p
                        className={"link-scroll link-clients"}
                        onClick={() => {
                          handleScrollToSection(".our-clients");
                        }}
                      >
                        Nossos clientes
                      </p>
                    </li>
                    <li>
                      <p
                        className={"link-scroll link-about-us"}
                        onClick={() => {
                          handleScrollToSection(".about-us");
                        }}
                      >
                        VTEX by Wecode
                      </p>
                    </li>
                    <li>
                      <p
                        className={"link-scroll link-value"}
                        onClick={() => {
                          handleScrollToSection(".how-generate-value");
                        }}
                      >
                        Como geramos valor
                      </p>
                    </li>
                    <li>
                      <p
                        className={"link-scroll link-methodology"}
                        onClick={() => {
                          handleScrollToSection(".methodology");
                        }}
                      >
                        O que fazemos
                      </p>
                    </li>
                    <li>
                      <p
                        className={"link-scroll link-contato"}
                        onClick={() => {
                          handleScrollToSection(".footer-container-desk");
                        }}
                      >
                        Contato
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={"footer-final"}>
              <div className={"footer-final-container"}>
                <img src={wecodeImg} />
                <div>
                  <p className={"footer-final-text"}>
                    ©2023 Wecode Tecnologia para e-commerce ltda. Todos os
                    direitos reservados.
                  </p>
                  <p className={"footer-final-text"}>
                    Rua Olavo Bilac, 503 - Sala 4 - Rio Branco, Caxias do Sul - RS, 95010-080
                    Telefone: (54) 98111-0081
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <></>
      )}
    </>
  );
}

export default FooterMob;
