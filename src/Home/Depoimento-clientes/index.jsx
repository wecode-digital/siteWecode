import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import "./sass/styles.css";

import fernandaL from "../../assets/images/client-profile-pics/fernanda-1.png";
import felipeHorizontal from "../../assets/videos/felipe-carraro-horizontal.mp4";
import felipeVertical from "../../assets/videos/felipe-carraro-vertical.mp4"

const testimonials = [
  {
    name: 'Teste.',
    position: 'CEO • Teste',
    image: fernandaL,
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    video: {
      horizontal: 'https://player.vimeo.com/video/1003519988?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      vertical: felipeVertical,
    }
  },
  {
    name: 'Felipe Farina',
    position: 'CEO • Carraro',
    image: fernandaL,
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    video: {
      horizontal: felipeHorizontal,
      vertical: felipeVertical,
    }
  },
  {
    name: 'Horizontal Video',
    position: 'CEO • PICCADILLY',
    image: fernandaL,
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    video: {
      horizontal: felipeHorizontal,
      vertical: felipeVertical,
    }
  },
  {
    name: 'Fernanda L.',
    position: 'CEO • PICCADILLY',
    image: fernandaL,
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    video: {
      horizontal: felipeHorizontal,
      vertical: felipeVertical,
    }
  },
];

export const TestimonialSlider = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

  const openModal = (videoUrl) => {
    setVideoSrc(videoUrl);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoSrc('');
  }

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
      <Slider {...settings}>
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
                <p className={'testimonial-description-content'}>{testimonial.testimonial}</p>
              </div>
              <div className={'testimonial-video'}>
                <button onClick={() => openModal(isMobile ? testimonial.video.vertical : testimonial.video.horizontal)} className={'testimonial-button-video'}>Assistir depoimento</button>
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
          <button onClick={closeModal} className="modal-close-button">X</button>
    
          <iframe
            src={videoSrc}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Depoimento em Vídeo"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default TestimonialSlider;