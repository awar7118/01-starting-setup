import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-UK", { month: "short" });
  const year = props.date.toLocaleString("en-UK", { year: "2-digit" });
  const day = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year ">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
