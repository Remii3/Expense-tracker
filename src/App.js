import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet paper",
    amount: 66.17,
    date: new Date(2021, 1, 22),
  },
  {
    id: "e3",
    title: "Clothes",
    amount: 194.23,
    date: new Date(2019, 8, 11),
  },
  {
    id: "e4",
    title: "Maintenance",
    amount: 1294.61,
    date: new Date(2021, 4, 13),
  },
  {
    id: "e5",
    title: "New Car",
    amount: 1294.61,
    date: new Date(2011, 1, 23),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
