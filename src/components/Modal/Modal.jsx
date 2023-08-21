// import { Component } from 'react';
// import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
// import { ModalOverlay, ModalContainer } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   static propTypes = {
//     selectedImage: PropTypes.string,
//     tags: PropTypes.string,
//     onClose: PropTypes.func,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     const { selectedImage, tags } = this.props;

//     return createPortal(
//       <ModalOverlay onClick={this.handleBackdropClick}>
//         <ModalContainer>
//           <img src={selectedImage} alt={tags} />
//         </ModalContainer>
//       </ModalOverlay>,
//       modalRoot
//     );
//   }
// }
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ selectedImage, tags, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContainer>
        <img src={selectedImage} alt={tags} />
      </ModalContainer>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  selectedImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
