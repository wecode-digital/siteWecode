import React, { useState, useEffect, useRef } from 'react';
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
  // adicione mais vídeos aqui se necessário
];

Modal.setAppElement('#root');

const VideoPlayer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      videoRef.current.pause();
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.currentTime = currentTime;
      videoRef.current.play();
    }
  };

  const handleModalTimeUpdate = () => {
    if (modalVideoRef.current) {
      setCurrentTime(modalVideoRef.current.currentTime);
    }
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const currentVideo = videos[currentVideoIndex];
  const videoSrc = isMobile ? currentVideo.video.vertical : currentVideo.video.horizontal;

  const handleVideoEnd = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
  };

  return (
    <>
      <p>teste</p>
      {!isModalOpen && ( 
        <div className="video-fixed">
          <video
            src={videoSrc}
            muted
            autoPlay
            loop
            ref={videoRef}
            onClick={openModal}
          />
          <button className="play-button" onClick={openModal}>▶</button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Vídeo Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button className="close" onClick={closeModal}>&times;</button>

        {videos.length > 1 && (
          <div className="modal-controls">
            {currentVideoIndex > 0 && (
              <button className="prev-button" onClick={handlePrevVideo}>⬅</button>
            )}
            {currentVideoIndex < videos.length - 1 && (
              <button className="next-button" onClick={handleNextVideo}>➡</button>
            )}
          </div>
        )}

        <video
          src={videoSrc}
          controls
          autoPlay
          ref={modalVideoRef}
          onTimeUpdate={handleModalTimeUpdate}
          onEnded={handleVideoEnd}
          className="modal-video"
        />
      </Modal>
    </>
  );
};

export default VideoPlayer;
