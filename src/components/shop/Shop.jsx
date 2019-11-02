import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "./Modal";
import T from "prop-types";

export const Shop = () => {
  const [modal, setModal] = useState(false);
  let history = useHistory();
  const createModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    history.push("/");
  };

  return (
    <Fragment>
      <Modal modal={modal} closeModal={closeModal} />
      <div>Welcome To Shop</div>
      <button id="purchase" onClick={() => createModal()}>
        Purchase
      </button>
    </Fragment>
  );
};

Shop.propTypes = {
  modal: T.bool,
  closeModal: T.func
};
