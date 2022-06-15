import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2022, 1, 14);
    const expenseTitle = 'Car Insurance';
    const expensePrice = 21.30;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
