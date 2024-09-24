import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './sass/styles.scss';

import felipeHorizontal from "../../assets/videos/depoimentos/felipe-carraro-horizontal.mp4";
import felipeVertical from "../../assets/videos/depoimentos/felipe-carraro-vertical.mp4";

const videos = [
  {
    video: {
      horizontal: felipeHorizontal,
      vertical: felipeVertical,
    },
  },
  {
    video: {
      horizontal: '/path/to/horizontal-video-2.mp4',
      vertical: '/path/to/vertical-video-2.mp4',
    },
  },
  // Adicione mais vídeos aqui
];

Modal.setAppElement('#root');

const VideoPlayer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const currentVideo = videos[currentVideoIndex];
  const videoSrc = isMobile ? currentVideo.video.vertical : currentVideo.video.horizontal;

  const handleVideoEnd = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0); // Se for o último vídeo, reinicia
    }
  };

  return (
    <>
      <p>teste</p>
      {/* Vídeo fixo no canto esquerdo */}
      <div className="video-fixed">
        <video
          src={videoSrc}
          muted
          autoPlay
          loop
          onClick={openModal}
        />
        <button className="play-button" onClick={openModal}>▶</button>
      </div>

      {/* Modal com o vídeo */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Vídeo Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button className="close" onClick={closeModal}>&times;</button>
        <iframe
          src={`${videoSrc}?autoplay=1&mute=1&controls=0&loop=1`}
          controls
          autoPlay
          onEnded={handleVideoEnd}
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
          className="modal-video"
        ></iframe>
      </Modal>
    </>
  );
};

export default VideoPlayer;
