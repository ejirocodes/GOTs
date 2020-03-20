import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayIcon from '../Assets/elements/play_icon.png';

const TrailerButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState('Transitioning...');

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle('Transitioning...');
  };

  const modalLoaded = () => {
    setTitle('Modal Ready');
  };

  return (
    <React.Fragment>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Hi</Modal.Title>
        </Modal.Header>
        <Modal.Body>The body</Modal.Body>
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
