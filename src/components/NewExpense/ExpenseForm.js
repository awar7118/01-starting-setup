import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  // array destructuring is how line 5 works.
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState(" ");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(event.target.value);
    // if 30/03/2022 selected it s hows 2022-03-30 when console logged.
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2022-01-02"
            max="2022-12-21"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onSubmit={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
