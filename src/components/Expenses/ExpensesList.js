import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expensesList.length === 0) {
    return <h2 className="expenses-list__fallback ">No Expenses found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expensesList.map((expense) => (
        <ExpenseItem
          key={expense.key}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;