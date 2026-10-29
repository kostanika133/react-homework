import { createPortal } from "react-dom";

function Conformation({ onConfirm, onCancel }) {
  return createPortal(
    <div className="overlay">
      <div className="conformaiton_box">
        <p>are you sure that you want to delete this box?</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}

export default Conformation;
