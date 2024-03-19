import React from "react";
import IncomeSectionTableItem from "./IncomeSectionTableItem/IncomeSectionTableItem";
import IncomeSectionTableTitle from "./IncomeSectionTableTitle/IncomeSectionTableTitle";
import Incomes from "../../utils/dummy_incomes_unique.json"

const IncomeSectionTable = ({ incomes = Incomes }) => {
  // Group expenses by category
  const incomesByCategory = incomes.reduce((acc, income) => {
    if (!acc[income.category]) {
      acc[income.category] = [];
    }
    acc[income.category].push(income);
    return acc;
  }, {});

  // Sort expenses by title within each category
  Object.keys(incomesByCategory).forEach((category) => {
    incomesByCategory[category].sort((a, b) => a.title.localeCompare(b.title));
  });

  return (
    <>
      <h2 className="font-[Poppins] text-2xl py-4">Your Incomes</h2>
      <div className="overflow-x-auto h-96">
        <table className="table table-pin-rows font-[Poppins-bold] ">
          {Object.keys(incomesByCategory).map((category) => (
            <React.Fragment key={category}>
              <IncomeSectionTableTitle income={{ category }} />
              <tbody>
                {incomesByCategory[category].map((income) => (
                  <IncomeSectionTableItem
                    key={income.title}
                    income={income}
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

export default IncomeSectionTable;
