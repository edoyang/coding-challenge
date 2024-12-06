import React, { useEffect, useState } from "react";
import data from "../../../../data.json";

const Expenses = () => {
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    const calculateExpenses = () => {
      const totalExpenses = data.data
        .filter((item) => item.account_category === "expense")
        .reduce((sum, item) => sum + item.total_value, 0);

      setExpenses(Math.round(totalExpenses));
    };

    calculateExpenses();
  }, []);

  return (
    <div className="content">
      <h2>Expenses</h2>
      <p>Total Expenses: ${expenses.toLocaleString()}</p>
    </div>
  );
};

export default Expenses;
