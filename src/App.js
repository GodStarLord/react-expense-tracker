import React from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

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
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
