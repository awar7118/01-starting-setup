import Expenses from "./components/Expenses/Expenses.js";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Birthday Gifts",
    amount: 45,
    date: new Date(2022, 3, 12),
  },
  {
    id: "e6",
    title: "Car Repair",
    amount: 125,
    date: new Date(2021, 1, 16),
  },
  {
    id: "e7",
    title: "Flight Tickets",
    amount: 345,
    date: new Date(2019, 3, 8),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
      </div>
      <div>
        <Expenses items={expenses} />
      </div>
    </div>
  );
};

export default App;
