import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayIcon from '../Assets/elements/play_icon.png';

const TrailerButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState('Transitioning...');
  const [timer, setTimer] = React.useState(0);
  const [startTime, setStartTime] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0);

  const showModal = () => {
    setIsOpen(true);
    setTitle('Modal Ready');
    document.body.style.backgroundColor = 'white';
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle('Transitioning...');
  };
  const startTimer = () => {
    setStartTime(Date.now());
  };

  const modalLoaded = () => {
    setEndTime(Date.now());
    setTitle('Modal Ready');
  };
  const onExit = () => {
    setTitle('Goodbye 😀');
  };

  const onExited = () => {
    document.body.style.backgroundColor = 'green';
  };

  return (
    <React.Fragment>
      <Modal
        style={{ color: '#000' }}
        show={isOpen}
        onHide={hideModal}
        onEnter={startTimer}
        onEntered={modalLoaded}
        onExit={onExit}
        onExited={onExited}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {endTime - startTime} ms
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rlR4PJn8b8I"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>{' '}
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>

      <button onClick={showModal} className="cta-btn">
        <span className="play-icon" role="img">
          <img src={PlayIcon} alt="play icon" />
        </span>
        <p>Watch Trailer</p>
      </button>
    </React.Fragment>
  );
};

export default TrailerButton;
