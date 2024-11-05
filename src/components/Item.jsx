import PropTypes from "prop-types";
import { useState } from "react";
import { ModalWind } from "./ModalWind/ModalWind";

const Item = ({ title, id, status, time, tasks, setTasks }) => {
  const [modalState, setModalState] = useState(false);
  const [checked, setChecked] = useState(status);
  const classes = ["todo"];

  const [isEdit, setIsEdit] = useState(false);
  const [taskEdit, setTaskEdit] = useState(title);

  if (checked) {
    classes.push("status");
  }

  const onUpdateStatus = () => {
    setChecked(!checked);
    tasks.map((item) => {
      if (item.id === id) {
        item.status = !checked;
      }
      return true;
    });
    setTasks([...tasks]);
  };

  const onRemoveItem = () => {
    setTasks([...tasks.filter((item) => item.id !== id)]);
  };

  const onSaveItem = () => {
    const modifedTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, title: taskEdit };
      }
      return item;
    });
    setTasks(modifedTasks);
    setIsEdit(false);
  };

  const onEditItem = (e) => {
    setTaskEdit(e.target.value);
  };

  if (isEdit) {
    return (
      <li className={classes.join(" ")}>
        <div className="divTask">
          <label>
            <input type="text" value={taskEdit} onChange={onEditItem} />
          </label>
          <button className="btn" onClick={onSaveItem}>
            Save
          </button>
          <i className="material-icons red-text" onClick={onRemoveItem}>
            X
          </i>
        </div>
      </li>
    );
  } else {
    return (
      <>
        <ModalWind
          call={modalState}
          onDestroy={() => setModalState(false)}
          onRemoveItem={onRemoveItem}
        />
        <li className={classes.join(" ")}>
          <div className="divTask">
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={onUpdateStatus}
              />
              <span>
                {title} {time}
              </span>
            </label>
            <button className="btn" onClick={() => setIsEdit(true)}>
              Edit
            </button>
            <i
              className="material-icons red-text"
              onClick={() => setModalState(true)}
            >
              X
            </i>
          </div>
        </li>
      </>
    );
  }
};

Item.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string,
  status: PropTypes.bool,
  time: PropTypes.string,
};

export default Item;
