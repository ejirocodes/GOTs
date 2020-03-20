import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayIcon from '../Assets/elements/play_icon.png';

const TrailerButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <React.Fragment>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>Hi</Modal.Header>
        <Modal.Body>asdfasdf</Modal.Body>
        <Modal.Footer>This is the footer</Modal.Footer>
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
