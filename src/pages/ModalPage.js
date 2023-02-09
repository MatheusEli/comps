import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <div className='relative'>
      <Button primary onClick={handleClick}>Open Modal</Button>
      {showModal && <Modal onClose={handleClose} />}
    </div>
  );
}

export default ModalPage;
