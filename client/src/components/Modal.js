import { snippets } from '../utils/templateData';
import '../styles/global.css';

const Modal = ({ isOpen, onClose, title, message, confirmAction }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <div>{message}</div>
        {title !== snippets.sending && (
          <div>
            {confirmAction && (
              <button onClick={confirmAction}>Submit</button>
            )}
            <button className="modal-close" onClick={onClose}>Go Back</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
