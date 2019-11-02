import React from "react";
import ReactDOM from "react-dom";
import T from "prop-types";

export const Modal = ({ modal, closeModal }) =>
  modal
    ? ReactDOM.createPortal(
        <div id="portal">
          <p>There is not products now</p>
          <button id="modal_button" onClick={closeModal}>
            Ok
          </button>
        </div>,
        document.getElementById("root")
      )
    : null;

Modal.propTypes = {
  modal: T.bool,
  closeModal: T.func
};
