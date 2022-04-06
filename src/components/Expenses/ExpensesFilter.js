import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = () => {
  // const [selectedDate, setselectedDate] = useState(" ");
  const dateSelector = (event) => {
    console.log("hello");
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select>
          <option value="2022" onClick={dateSelector}>
            2022
          </option>
          <option value="2021" onClick={dateSelector}>
            2021
          </option>
          <option value="2020" onClick={dateSelector}>
            2020
          </option>
          <option value="2019" onClick={dateSelector}>
            2019
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
