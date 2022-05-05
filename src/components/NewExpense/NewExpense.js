import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [addingNewExpense, setAddingNewExpense] = useState(false);
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddingNewExpense(false);
  };

  const onShowForm = () => {
    setAddingNewExpense(true);
  };
  const onCloseForm = () => {
    setAddingNewExpense(false);
  };
  return (
    <div className="new-expense">
      {!addingNewExpense && (
        <div className=".new-expense__showForm">
          <button onClick={onShowForm}>Add Expense</button>
        </div>
      )}
      {addingNewExpense && (
        <ExpenseForm
          onSaveExpenseData={expenseDataHandler}
          closeForm={onCloseForm}
        />
      )}
    </div>
  );
};
export default NewExpense;
