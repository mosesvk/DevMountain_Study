import { createPortal } from 'react-dom';

const Modal = ({onClose}) => {
  return createPortal(
    <div onClick={onClose}>
      <div className='absolute inset-0 bg-gray-300 opacity-80'></div>
      <div className='absolute inset-40 p-10 bg-white'>I'm a Modal!</div>
    </>,
    document.querySelector('.modal-container')
  );
};

export default Modal;
