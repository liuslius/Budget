import React, { useContext } from "react";
import SavedItem from "./SavedItem";
import { AppContext } from "../context/AppContext";

const SavedList = () => {
  const { saved } = useContext(AppContext);

  return (
    <ul className="list-group">
      {saved.map((saved) => (
        <SavedItem id={saved.id} name={saved.name} cost={saved.cost} />
      ))}
    </ul>
  );
};

export default SavedList;
