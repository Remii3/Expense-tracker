import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [chosenYear, setChosenYear] = useState("2020");

  const expensesFilterHandler = (newChosenDate) => {
    setChosenYear(newChosenDate);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === chosenYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChosenYear={expensesFilterHandler}
        currentYear={chosenYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
