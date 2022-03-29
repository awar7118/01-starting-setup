import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-UK", { month: "short" });
  return (
    <div className="expense-item">
      <div>{month}</div>
      <div>year</div>
      <div>day</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
