import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}> Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
        )}
      </div>
    </div>
  );
};
export default NewExpense;
