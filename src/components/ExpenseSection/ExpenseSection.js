import React from "react";
import ExpenseSectionTableItem from "./ExpenseSectionTableItem/ExpenseSectionTableItem";
import ExpenseSectionTableTitle from "./ExpenseSectionTableTitle/ExpenseSectionTableTitle";
import Expenses from "../../utils/expenseData.json";

const ExpenseSectionTable = ({ expenses = Expenses }) => {
  // Group expenses by category
  const expensesByCategory = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = [];
    }
    acc[expense.category].push(expense);
    return acc;
  }, {});

  // Sort expenses by title within each category
  Object.keys(expensesByCategory).forEach((category) => {
    expensesByCategory[category].sort((a, b) => a.title.localeCompare(b.title));
  });

  return (
    <>
      <h2 className="font-[Poppins] text-2xl py-4">Your Expenses</h2>
      <div className="overflow-x-auto h-96">
        <table className="table table-pin-rows font-[Poppins-bold] ">
          {Object.keys(expensesByCategory).map((category) => (
            <React.Fragment key={category}>
              <ExpenseSectionTableTitle expense={{ category }} />
              <tbody>
                {expensesByCategory[category].map((expense) => (
                  <ExpenseSectionTableItem
                    key={expense.title}
                    expense={expense}
                  />
                ))}
              </tbody>
            </React.Fragment>
          ))}
        </table>
      </div>
    </>
  );
};

export default ExpenseSectionTable;
