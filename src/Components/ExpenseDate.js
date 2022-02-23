import "./ExpenseDate.css";


function ExpenseDate(props) {

    let month = props.date.toLocaleString("en-US", { month: "short" });
    let day = props.date.toLocaleString("en-US", { day: "2-digit" });
    let year = props.date.getFullYear();


    return (
      <div>
        <div className="date">
          <div>{day}</div>
          <div>{month}</div>
          <div>{year}</div>
        </div>
      </div>
    );
}
export default ExpenseDate;