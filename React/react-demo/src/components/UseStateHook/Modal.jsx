import React, { useState } from "react";
import ReactPortal from "./ReactPortal";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Main App Content</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>This is a Portal Modal</h2>
          <p>It is rendered outside the #root hierarchy!</p>
        </Modal>
      )}
    </div>
  );
}

export default Modal;
