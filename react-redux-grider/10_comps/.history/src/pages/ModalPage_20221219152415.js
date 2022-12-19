import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const ModalPage = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button primary>Open Modal</Button>
      {isOpen && <Modal />}
    </div>
  );
};

export default ModalPage;
