import ExpenseItem from "./Components/ExpenseItem";
import "./App.css";

function App() {
  let expenses = [
    {
      title: "Food",
      amount: 100,
      date: new Date(2021, 2, 5)
    },
    {
      title: "Flight",
      amount: 300,
      date: new Date(2021, 1, 2)
    },
    {
      title: "House rent",
      amount: 500,
      date :new Date(2021, 6, 9)
    },
    {
      title: "Petrol",
      amount: 400,
      date : new Date(2021, 5, 5)
    },
    {
      title: "Books",
      amount: 200,
      date : new Date(2021, 3, 8)
    },
  ]

  return (
    <div>
      <div className="appHeading">
        <h1>Expense Manager</h1>
      </div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

       <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

       <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

       <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>

       <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
