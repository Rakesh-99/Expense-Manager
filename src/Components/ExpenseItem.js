import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    

  return (
    <div className="expenseItems">
      <div className="title">{props.title}</div>
      <div className="amount">{props.amount}</div>
      <ExpenseDate date={ props.date}/>
    </div>
  );
}

export default ExpenseItem;
