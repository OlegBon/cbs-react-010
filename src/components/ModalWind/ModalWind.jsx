import PropTypes from "prop-types";
import "./ModalWind.css";

export const ModalWind = ({ call, onDestroy, onRemoveItem }) => {
  if (!call) {
    return null;
  }

  return (
    <div className="modalWind">
      <div className="modalWind-content">
        <i className="closeModalWind" onClick={onDestroy}>
          X
        </i>
        <h1>Видалити запис?</h1>
        <div className="btns">
          <button className="btn accept" onClick={onRemoveItem}>
            Так, видалити
          </button>
          <button className="btn reject" onClick={onDestroy}>
            Ні, залишити
          </button>
        </div>
      </div>
    </div>
  );
};

ModalWind.propTypes = {
  call: PropTypes.bool,
  onDestroy: PropTypes.func,
  onRemoveItem: PropTypes.func,
};
