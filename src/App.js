import "./App.css";
import "./Components/Expenses";
import Expenses from "./Components/Expenses";


function App() {
    let list = [
      {
        title: "College Fee",
        date: new Date(2022, 5, 7),
        amount: 500,
      },
      {
        title: "Hostel Fee",
        date: new Date(2022, 1, 2),
        amount: 300,
      },
      {
        title: "Books",
        date: new Date(2022, 2, 4),
        amount: 100,
      },
      {
        title: "Clothes",
        date: new Date(2022, 9, 29),
        amount: 200,
      },
    ];

  return (
    <div>
          
          <Expenses item={list}/>
     
    </div>
  );
}

export default App;
