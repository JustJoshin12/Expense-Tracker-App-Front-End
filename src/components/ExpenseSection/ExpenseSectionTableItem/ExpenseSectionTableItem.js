const ExpenseSectionTableItem = ({expense}) => {
    return (
        <tr className="flex items-center justify-around"><td className="text-[16px] text-secondary w-1/2"><span>{expense.title}</span></td><span className="text-red-600 text-lg">-{expense.amount}</span></tr>
    )
}

export default ExpenseSectionTableItem;