const ExpenseSectionTableTitle = ({expense}) => {
  return (
    <thead>
      <tr>
        <th className="text-xl">{expense.category}</th>
      </tr>
    </thead>
  );
};

export default ExpenseSectionTableTitle;