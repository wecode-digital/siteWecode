import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import "./sass/styles.css";

//Profile pic
import felipeFarina from "../../assets/images/client-profile-pics/felipe-carraro-photo.png";
import priscilaBaum from "../../assets/images/client-profile-pics/priscila-baum-photo.png";
import giulianoBettanin from "../../assets/images/client-profile-pics/giuliano-inbetta.png";
import viniciusMartini from "../../assets/images/client-profile-pics/vinicius-ou-photo.png";
import alanRosanelli from "../../assets/images/client-profile-pics/alan-bibi-photo.png";
import priscilaAnselmiPhoto from "../../assets/images/client-profile-pics/priscila-anselmi-photo.png"
import liliamKekoPhoto from "../../assets/images/client-profile-pics/liliam-keko-photo.png"

//Videos
import felipeHorizontal from "../../assets/videos/depoimentos/felipe-carraro-horizontal.mp4";
import felipeVertical from "../../assets/videos/depoimentos/felipe-carraro-vertical.mp4";

import priscilaHorizontal from "../../assets/videos/depoimentos/priscila-piccaddily-horizontal.mp4";
import priscilaVertical from "../../assets/videos/depoimentos/priscila-piccaddily-vertical.mp4";

import giulianoHorizontal from "../../assets/videos/depoimentos/giuliano-bettanin-horizontal.mp4";
import giulianoVertical from "../../assets/videos/depoimentos/giuliano-bettanin-vertical.mp4";

import viniciusHorizontal from "../../assets/videos/depoimentos/vinicius-ou-horizontal.mp4";
import viniciusVertical from "../../assets/videos/depoimentos/vinicius-ou-vertical.mp4";

import priscilaAnselmi from "../../assets/videos/depoimentos/priscila-anselmi-depoimento.mp4"
import liliamKeko from "../../assets/videos/depoimentos/liliam-keko-depoimento.mp4"
import alanBibi from "../../assets/videos/depoimentos/alan-bibi-depoimento.mp4"

//svg
import playDepoimentos from "../../assets/svg/play.svg"
import fecharModal from "../../assets/svg/fechar-modal.svg"
import arrowEsquerda from "../../assets/svg/left-arrow.svg"
import arrowDireita from "../../assets/svg/right-arrow.svg"

//Ordem dos depoimentos (Mais podem ser adicionados da mesma maneira)
const testimonials = [
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
];

export const TestimonialSlider = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Estado para armazenar o índice do vídeo atual
  const [videoSrc, setVideoSrc] = useState('');
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  const sliderRef = useRef(null); // Referência para o slider

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
    <div className={'testimony-main-container'}>
      <div className={'testimony-titles-container'}>
        <h2 className={'testimony-title'}>Depoimentos</h2>
        <h3 className={'testimony-subtitle'}>Quem confia no nosso trabalho e atesta nossa qualidade</h3>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-content">
              <div className={'testimonial-profile'}>
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <div className='testimonial-name-position'>
                  <h3 className={'testimonial-name'}>{testimonial.name}</h3>
                  <p className={'testimonial-position'}>{testimonial.position}</p>
                </div>
              </div>
              <div className={'testimonial-desciption'}>
                <p className={'testimonial-description-content'} dangerouslySetInnerHTML={{ __html: testimonial.testimonial }} />
              </div>
              <div className={'testimonial-video'}>
                <button onClick={() => openModal(index)} className={'testimonial-button-video'}>
                  Assistir depoimento <img src={playDepoimentos} className='testiomonial-video-arrow' alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Vídeo do Depoimento"
      >
        <div
          className="modal-content-inner"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={closeModal} className="modal-close-button"><img src={fecharModal} alt="" /></button>
          <div className="modal-navigation">
            <button onClick={handlePrevious} className="modal-arrow-left"><img src={arrowEsquerda} alt="" /></button>
            <iframe
              src={videoSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Depoimento em Vídeo"
            ></iframe>
            <button onClick={handleNext} className="modal-arrow-right"><img src={arrowDireita} alt="" /></button>
          </div>
        </div>
      </Modal>
    </div>
  );
};


export default TestimonialSlider;