// @ts-nocheck
import React from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlayPortal = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop />, overlayPortal)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayPortal
      )}
    </>
  );
};

export default Modal;
