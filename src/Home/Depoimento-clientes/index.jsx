import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sass/styles.css";

const testimonials = [
  {
    name: 'Fernanda L.',
    position: 'CEO • PICCADILLY',
    image: '../../assets/images/client-profile-pics/fernanda-l.png', // imagem cliente
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    video: 'link-para-video.mp4' // real link of my vídeo hehe
  },
  // {
  //   name: '',
  //   position: '',
  //   image: '',
  //   testimonial: '',
  //   video: ''
  // },
];

export const TestimonialSlider = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const openModal = (videoUrl) => {
    setVideoSrc(videoUrl);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoSrc('');
  }

  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '30px',
          slidesToShow: 1
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
                  <h3 className={'testi'}>{testimonial.name}</h3>
                  <p>{testimonial.position}</p>
                </div>
              </div>

              <div>
                <p>{testimonial.testimonial}</p>
              </div>

              <div>
                <button onClick={() => openModal(testimonial.video)}>Assistir depoimento</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"  // classe conteúdo do modal
        overlayClassName="modal-overlay" // classe do overlay
        contentLabel="Vídeo do Depoimento"
      >
        <div className="modal-content-inner">
          <button onClick={closeModal} className="modal-close-button">X</button>
          <video width="100%" controls>
            <source src={videoSrc} type="video/mp4" />
            videozinho humildorone daquele jantus prime de lei
          </video>
        </div>
      </Modal> */}
    </div>
  );
};

export default TestimonialSlider;
