import React from "react";
const Modal = ({ children, showModalAction, baseExchangeRate }) => {
  const closeModal = () => {
    showModalAction();
  };
  return (
    <>
      <div className="Overlay">
        <div className="Modal">
          <h1>select the currency you are interested in</h1>
          <div> {children}</div>
          <button disabled={!baseExchangeRate} className="modal__button" type="button" onClick={closeModal}>
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
