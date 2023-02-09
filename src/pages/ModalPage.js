import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button primary onClick={handleClose}>
      I Accept
    </Button>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreementfor you to accept</p>
    </Modal>
  );
  return (
    <div className="relative">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
        consequat justo, ut tempus magna rhoncus sed. In vel justo sit amet eros
        fermentum pulvinar sit amet fringilla ex. Donec convallis auctor leo.
        Phasellus sagittis nec orci in ullamcorper. Cras a neque a arcu commodo
        porttitor id et orci. Vestibulum sit amet ex cursus, feugiat lectus et,
        elementum mauris. Vestibulum et justo mollis, placerat arcu ut,
        tincidunt lorem.
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
        consequat justo, ut tempus magna rhoncus sed. In vel justo sit amet eros
        fermentum pulvinar sit amet fringilla ex. Donec convallis auctor leo.
        Phasellus sagittis nec orci in ullamcorper. Cras a neque a arcu commodo
        porttitor id et orci. Vestibulum sit amet ex cursus, feugiat lectus et,
        elementum mauris. Vestibulum et justo mollis, placerat arcu ut,
        tincidunt lorem.
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
        consequat justo, ut tempus magna rhoncus sed. In vel justo sit amet eros
        fermentum pulvinar sit amet fringilla ex. Donec convallis auctor leo.
        Phasellus sagittis nec orci in ullamcorper. Cras a neque a arcu commodo
        porttitor id et orci. Vestibulum sit amet ex cursus, feugiat lectus et,
        elementum mauris. Vestibulum et justo mollis, placerat arcu ut,
        tincidunt lorem.
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
        consequat justo, ut tempus magna rhoncus sed. In vel justo sit amet eros
        fermentum pulvinar sit amet fringilla ex. Donec convallis auctor leo.
        Phasellus sagittis nec orci in ullamcorper. Cras a neque a arcu commodo
        porttitor id et orci. Vestibulum sit amet ex cursus, feugiat lectus et,
        elementum mauris. Vestibulum et justo mollis, placerat arcu ut,
        tincidunt lorem.
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
        consequat justo, ut tempus magna rhoncus sed. In vel justo sit amet eros
        fermentum pulvinar sit amet fringilla ex. Donec convallis auctor leo.
        Phasellus sagittis nec orci in ullamcorper. Cras a neque a arcu commodo
        porttitor id et orci. Vestibulum sit amet ex cursus, feugiat lectus et,
        elementum mauris. Vestibulum et justo mollis, placerat arcu ut,
        tincidunt lorem.
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
        consequat justo, ut tempus magna rhoncus sed. In vel justo sit amet eros
        fermentum pulvinar sit amet fringilla ex. Donec convallis auctor leo.
        Phasellus sagittis nec orci in ullamcorper. Cras a neque a arcu commodo
        porttitor id et orci. Vestibulum sit amet ex cursus, feugiat lectus et,
        elementum mauris. Vestibulum et justo mollis, placerat arcu ut,
        tincidunt lorem.
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
        consequat justo, ut tempus magna rhoncus sed. In vel justo sit amet eros
        fermentum pulvinar sit amet fringilla ex. Donec convallis auctor leo.
        Phasellus sagittis nec orci in ullamcorper. Cras a neque a arcu commodo
        porttitor id et orci. Vestibulum sit amet ex cursus, feugiat lectus et,
        elementum mauris. Vestibulum et justo mollis, placerat arcu ut,
        tincidunt lorem.
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
        consequat justo, ut tempus magna rhoncus sed. In vel justo sit amet eros
        fermentum pulvinar sit amet fringilla ex. Donec convallis auctor leo.
        Phasellus sagittis nec orci in ullamcorper. Cras a neque a arcu commodo
        porttitor id et orci. Vestibulum sit amet ex cursus, feugiat lectus et,
        elementum mauris. Vestibulum et justo mollis, placerat arcu ut,
        tincidunt lorem.
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
        consequat justo, ut tempus magna rhoncus sed. In vel justo sit amet eros
        fermentum pulvinar sit amet fringilla ex. Donec convallis auctor leo.
        Phasellus sagittis nec orci in ullamcorper. Cras a neque a arcu commodo
        porttitor id et orci. Vestibulum sit amet ex cursus, feugiat lectus et,
        elementum mauris. Vestibulum et justo mollis, placerat arcu ut,
        tincidunt lorem.
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
        consequat justo, ut tempus magna rhoncus sed. In vel justo sit amet eros
        fermentum pulvinar sit amet fringilla ex. Donec convallis auctor leo.
        Phasellus sagittis nec orci in ullamcorper. Cras a neque a arcu commodo
        porttitor id et orci. Vestibulum sit amet ex cursus, feugiat lectus et,
        elementum mauris. Vestibulum et justo mollis, placerat arcu ut,
        tincidunt lorem.
      </p>
      <br/>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
