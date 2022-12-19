import { createPortal } from 'react-dom';

const Modal = () => {
  return (
    <>
      <div className='absolute inset-0 bg-gray-300 opacity-80'></div>
      <div className='absolute inset-40 p-10 bg-white'>
        I'm a Modal!
      </div>
    </>
  );
};

export default Modal;
