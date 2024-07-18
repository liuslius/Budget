import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost * 1.07);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span> Total: ${totalExpenses} </span>
    </div>
  );
};

export default ExpenseTotal;
