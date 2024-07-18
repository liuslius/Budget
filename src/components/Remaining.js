import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-danger";

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses * 1.07}</span>
    </div>
  );
};

export default Remaining;
