const IncomeSectionTableItem = ({income}) => {
    return (
        <tr className="flex items-center justify-around"><td className="text-[16px] text-secondary w-1/2"><p>{income.title}</p></td><span className="text-green-600 text-lg">+{income.amount}</span></tr>
    )
}

export default IncomeSectionTableItem;