import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = new Date(2021, 2, 28);
  return (
    <div className="expense-item">
      <div>Month</div>
      <div>Year</div>
      <div>Date</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
