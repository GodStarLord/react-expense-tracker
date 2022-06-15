import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>May 20th, 2021</div>
      <div className="expense-item__description">
        <h2>Title</h2>
        <div className="expense-item__price">$250</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
