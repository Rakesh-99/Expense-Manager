import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
      <div className="expenseList">

        <h1 className="hello">Expense Manager</h1>
        <ExpenseItem
          title={props.item[0].title}
          date={props.item[0].date}
          amount={props.item[0].amount}
        />

        <ExpenseItem
          title={props.item[1].title}
          date={props.item[1].date}
          amount={props.item[1].amount}
        />

        <ExpenseItem
          title={props.item[2].title}
          date={props.item[2].date}
          amount={props.item[2].amount}
        />

        <ExpenseItem
          title={props.item[3].title}
          date={props.item[3].date}
          amount={props.item[3].amount}
        />
      </div>
    );
}


export default Expenses;