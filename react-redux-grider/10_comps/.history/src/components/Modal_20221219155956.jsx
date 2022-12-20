import { createPortal } from 'react-dom';

const Modal = ({ onClose, children, actionBar }) => {
  return createPortal(
    <div>
      <div
        className='absolute inset-0 bg-gray-300 opacity-80'
        onClick={onClose}
      ></div>
      <div className='absolute inset-40 p-10 bg-white'>
        {children}
        <div className='flex justify-end'>
            {actionBar}
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
};

export default Modal;
