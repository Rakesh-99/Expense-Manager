import "./ExpenseItem.css";

function ExpenseItem(props) {
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let month = props.date.toLocaleString("en-US", { month: "short" });
  let year = props.date.getFullYear();
  




  return (
    <div className="container">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <div className="date">
        <div>{ day}</div>
        <div>{ month}</div>
        <div>{ year}</div>
      </div>
      <div className="amount">
        <h3>${props.amount}</h3>
      </div>
    </div>
  );
}
export default ExpenseItem;
