import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input type="date" min="2022-01-02" max="2022-12-21" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add button</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
