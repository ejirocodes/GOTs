import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import PlayIcon from '../Assets/elements/play_icon.png';

const TrailerButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState('Transitioning...');

  const showModal = () => {
    setIsOpen(true);
    setTitle('Game of Thrones | Season 8 | Official Trailer (HBO)');
    document.body.style.backgroundColor = 'white';
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle('Transitioning...');
  };

  const modalLoaded = () => {
    setTitle('Game of Thrones | Season 8 | Official Trailer (HBO)');
  };
  const onExit = () => {
    setTitle('Goodbye 😀');
  };

  const onExited = () => {
    document.body.style.backgroundColor = 'green';
  };
  const spinnerStyle = {
    borderColor: 'var(--btn-color-main)',
    borderRightColor: 'transparent'
  };

  return (
    <React.Fragment>
      <Modal
        style={{ color: '#000' }}
        show={isOpen}
        onHide={hideModal}
        onEntered={modalLoaded}
        onExit={onExit}
        onExited={onExited}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="embed-responsive embed-responsive-16by9">
            <Spinner animation="border" style={spinnerStyle}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rlR4PJn8b8I"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Close</button>
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
