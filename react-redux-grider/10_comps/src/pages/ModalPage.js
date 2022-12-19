import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const ModalPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const clickHandler = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
      <Button primary onClick={clickHandler}>Open Modal</Button>
      {isOpen && <Modal />}
    </div>
  );
};

export default ModalPage;
