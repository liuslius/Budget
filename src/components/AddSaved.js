import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddSavedForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const saved = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    //alert("name: " + name + " cost: " + cost);

    dispatch({
      type: "ADD_SAVED",
      payload: saved,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div classname="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label for="cost">Price</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label for="category">Quantity</label>
          <input
            //required="required"
            type="text"
            className="form-control"
            id="category"
          ></input>
        </div>
        <div className="col-sm mt-4">
          <button type="submit" className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddSavedForm;
