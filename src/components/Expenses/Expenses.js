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
  return (
    <div>
      <Card className="expenses">
        <div>
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
        </div>
        {/* Below abuses the && operator. JS check if the first part is true, and if yes, displays the second  */}
        {/* Checking if theres no expenses for the specific year to display */}
        {filteredExpenses.length === 0 && (
          <p style={{ textAlign: "center", color: "white" }}>
            Feel free to input your first expense! 🚀{" "}
          </p>
        )}
        {/* displaying the specific year */}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              // if you add key, it will help react uniquely identify each item. Always add key when mapping list of items
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          ))}
      </Card>
    </div>
  );
}
export default Expenses;
