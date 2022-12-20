import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const closeHandler = () => {
    setIsOpen(!isOpen);
  };

  const actionBar = (
    <div>
      <Button onClick={onClose} primary>I Accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={closeHandler} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={clickHandler}>
        Open Modal
      </Button>
      {isOpen && modal}
    </div>
  );
};

export default ModalPage;
