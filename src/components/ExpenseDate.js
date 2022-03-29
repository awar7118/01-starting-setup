function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-UK", { month: "short" });
  const year = props.date.toLocaleString("en-UK", { year: "2-digit" });
  const day = props.date.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}
export default ExpenseDate;
