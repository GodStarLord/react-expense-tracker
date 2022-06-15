import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 21.4,
      date: new Date(2021, 2, 4),
    },
    {
      id: "e2",
      title: "Health Insurance",
      amount: 5422.4,
      date: new Date(2021, 2, 4),
    },
    {
      id: "e3",
      title: "Bike Insurance",
      amount: 413.4,
      date: new Date(2021, 2, 4),
    },
    {
      id: "e4",
      title: "Plane Insurance",
      amount: 3312321.4,
      date: new Date(2021, 2, 4),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
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
    </div>
  );
}

export default App;
