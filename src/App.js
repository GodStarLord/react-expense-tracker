import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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

function App() {
  const [expensesArray, setExpensesArray] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpensesArray((previousExpenses) => {
      return [newExpense, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesArray} />
    </div>
  );
}

export default App;
