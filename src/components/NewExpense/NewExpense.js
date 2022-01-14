import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);
  const newExpenseHandler = () => {
    setIsEditing(true);
  };
  const cancelNewExpenseHandler = () => {
    setIsEditing(false);
  };

  const submittingFormHandler = expenseData => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onCancel={cancelNewExpenseHandler}
          onSubmittingExpenseForm={submittingFormHandler}
        />
      ) : (
        <button onClick={newExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
