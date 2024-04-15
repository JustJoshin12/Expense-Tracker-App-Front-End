import ExpenseData from "../../utils/expenseData.json";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import trashCanIcon from "../../images/trash.svg";
import penIcon from "../../images/pen-sparkle.svg";

const ExpensePage = () => {
  // Summarize the expenses by category
  const summarizedExpenses = ExpenseData.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.category]) {
      accumulator[currentValue.category] += currentValue.amount;
    } else {
      accumulator[currentValue.category] = currentValue.amount;
    }
    return accumulator;
  }, {});

  // Convert the summary into the data format expected by PieChart
  const pieChartData = Object.keys(summarizedExpenses).map(
    (category, index) => ({
      id: index,
      value: summarizedExpenses[category],
      label: category,
    })
  );
  return (
    <div className="flex flex-col sm:flex-row flex-1">
      <aside className="p-6 m-2 flex-[1_1_100px] border-2 border-black rounded-badge">
        <div className="p-5">
          <h2></h2>
        </div>
      </aside>
      <main className="p-6 m-2 flex-[5_5_150px] border-2 border-black rounded-badge">
        <div className="p-5">
          <h2 className="text-4xl font-[Poppins-bold] py-4 text-accent">
            My Expenses
          </h2>
          <div className="overflow-x-auto h-96 w-[90%] mx-auto hover:bg-primary hover:text-secondary duration-200">
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr className="text-lg font-[Poppins-bold]">
                  <th></th>
                  <td>Name</td>
                  <td>Amount</td>
                  <td>Description</td>
                  <td>Type</td>
                  <td>Date</td>
                  <td>
                    <button>Sort Table</button>
                  </td>
                  <th></th>
                </tr>
              </thead>
              <tbody className="font-[Poppins-bold]">
                {ExpenseData.map((expense, index) => {
                  return (
                    <tr key={index} className="">
                      <th>{index + 1}</th>
                      <td>{expense.title}</td>
                      <td>-{expense.amount}</td>
                      <td>{expense.description}</td>
                      <td>{expense.category}</td>
                      <td>{expense.date}</td>
                      <td>
                        <button className="hover:scale-150 duration-150 px-1">
                          <img src={trashCanIcon} />
                        </button>
                        <button className="hover:scale-150 duration-150 px-1">
                          <img src={penIcon} />
                        </button>
                      </td>
                      <th>{index + 1}</th>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="text-lg font-[Poppins-bold]">
                  <th></th>
                  <td>Name</td>
                  <td>Amount</td>
                  <td>Description</td>
                  <td>Type</td>
                  <td>Date</td>
                  <td></td>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </main>
      <aside className="p-6 m-2 flex-[1_1_100px] border-2 border-black rounded-badge ">
        <h2 className="text-3xl font-[Poppins-bold] p-5">Expense Chart</h2>
        <PieChart
          colors={[
            "red",
            "blue",
            "green",
            "yellow",
            "orange",
            "purple",
            "pink",
            "cyan",
            "magenta",
            "teal",
            "lime",
            "brown",
            "grey",
          ]}
          series={[
            {
              data: pieChartData,
              arcLabel: "label",
              highlightScope: { faded: "global", highlighted: "item" },
              faded: {
                innerRadius: 30,
                additionalRadius: -30,
                color: "gray",
              },
              innerRadius: 40,
              cx: 250,
            },
          ]}
          width={500}
          height={400}
          slotProps={{
            legend: { hidden: true },
          }}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "black",
              fontWeight: "bold",
              color: "black",
            },
          }}
        />
      </aside>
    </div>
  );
};

export default ExpensePage;
