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
  const spinnerStyle = {
    borderColor: 'var(--btn-color-main)',
    borderRightColor: 'transparent',
    marginRight: '.8rem'
  };
  const exitStyle = {
    backgroundColor: 'var(--btn-color-main)',
    border: 'none',
    padding: '.6rem 1.3rem .4rem 1.3rem',
    color: '#fff',
    fontFamily: 'Game-of-Thrones',
    fontSize: '1.2rem',
    letterSpacing: '.2rem'
  };
  const titleStyle = {
    color: 'var(--btn-color-main)'
  }

  return (
    <React.Fragment>
      <Modal
        style={{ color: '#000' }}
        show={isOpen}
        onHide={hideModal}
        onEntered={modalLoaded}
        onExit={onExit}
      >
        <Modal.Header>
          <Modal.Title style={titleStyle}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="embed-responsive embed-responsive-16by9">
            <Spinner animation="border" role="status" style={spinnerStyle}>
              <span className="sr-only">Loading...</span>
            </Spinner>
            <Spinner animation="border" role="status" style={spinnerStyle}>
              <span className="sr-only">Loading...</span>
            </Spinner>
            <Spinner animation="border" role="status" style={spinnerStyle}>
              <span className="sr-only">Loading...</span>
            </Spinner>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rlR4PJn8b8I"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="gotsTrailer"
            ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button style={exitStyle} onClick={hideModal}>
            Close
          </button>
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
