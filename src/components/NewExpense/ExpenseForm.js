import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  
     /*---- Multiple States ----*/
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); // set the new value of form control.. just to store the value
    };

    const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    };

  /* ---- Single State and handle all the inputs ---- */
  /* Note: only change the particular control state, rest should remain same, hence spread operator */
  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  /* const titleChangeHandler = (event) => {
    // state update depends upon previous state
    setUserInput((previousState) => {
      return {
        ...userInput,
        enteredTitle: event.target.value,
      };
    }); */

    // spread operator
    //setUserInput({ ...userInput, enteredTitle: event.target.value });

    // manual assignment
    /* setUserInput({
      enteredTitle: event.target.value, // New Value
      enteredAmount: userInput.enteredAmount, // Old Value
      enteredDate: userInput.enteredDate,
    }); 
  }; */

  /* const amountChangeHandler = (event) => {
    //setUserInput({ ...userInput, enteredAmount: event.target.value });

    setUserInput((previousState) => {
      return {
        ...userInput,
        enteredAmount: event.target.value,
      };
    });
  }; */

  /* const dateChangeHandler = (event) => {
    //setUserInput({ ...userInput, enteredDate: event.target.value });

    setUserInput((previousState) => {
      return {
        ...userInput,
        enteredDate: event.target.value,
      };
    });
  }; */

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
