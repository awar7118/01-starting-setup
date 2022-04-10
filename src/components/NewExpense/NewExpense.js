import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div>
      <div></div>
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
      </div>
    </div>
  );
};
export default NewExpense;
