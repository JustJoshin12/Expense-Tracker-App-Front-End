const IncomeSectionTableTitle = ({income}) => {
    return (
      <thead>
        <tr>
          <th className="text-xl">{income.category}</th>
        </tr>
      </thead>
    );
  };
  
  export default IncomeSectionTableTitle;