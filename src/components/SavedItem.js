import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const SavedItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteSaved = () => {
    dispatch({
      type: "DELETE_SAVED",
      payload: props.id,
    });
  };

  return (
    <li
      style={{ color: "red" }}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {props.name}
      <div>
        <span className="badge bg-primary badge-pill mr-3">${props.cost}</span>
        <TiDelete size="1.5em" onClick={handleDeleteSaved}></TiDelete>
      </div>
    </li>
  );
};

export default SavedItem;
