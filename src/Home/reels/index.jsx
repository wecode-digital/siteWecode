import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './VideoPlayer.css';

// Cadastro de vídeos simplificado
const videos = [
  {
    video: {
      horizontal: '/path/to/horizontal-video.mp4',
      vertical: '/path/to/vertical-video.mp4',
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

  // Detectar se está no mobile ou desktop
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

  // Pegar o vídeo atual da lista
  const currentVideo = videos[currentVideoIndex];
  const videoSrc = isMobile ? currentVideo.video.vertical : currentVideo.video.horizontal;

  // Função para avançar para o próximo vídeo
  const handleVideoEnd = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0); // Se for o último vídeo, reinicia
    }
  };

  return (
    <>
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
        <video
          src={videoSrc}
          controls
          autoPlay
          onEnded={handleVideoEnd} // Executa ao fim do vídeo
          className="modal-video"
        />
      </Modal>
    </>
  );
};

export default VideoPlayer;
