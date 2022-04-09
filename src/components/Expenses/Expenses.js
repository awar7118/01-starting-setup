import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import "./ExpensesFilter";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    // Se,ectedYear is
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expenseDisplayContent = (
    <p style={{ textAlign: "center", color: "white" }}>
      Feel free to input your first expense! 🚀{" "}
    </p>
  );
  if (filteredExpenses.length > 0) {
    expenseDisplayContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        // if you add key, it will help react uniquely identify each item. Always add key when mapping list of items
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <div>
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
        </div>
        {expenseDisplayContent}
      </Card>
    </div>
  );
}
export default Expenses;
