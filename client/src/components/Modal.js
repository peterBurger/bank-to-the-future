import React from 'react';
import '../styles/global.css';

const Modal = ({ isOpen, onClose, title, message, confirmAction }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title}</h3>
        <div>{message}</div>
        <div className="modal-buttons">
          {confirmAction && (
            <button onClick={confirmAction}>Submit</button>
          )}
          <button className="modal-close" onClick={onClose}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
