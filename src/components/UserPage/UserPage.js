import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RecentExpenses from "../ExpenseSection/ExpenseSection";
import ListOfIncomes from "../IncomeSection/IncomeSection";

const UserPage = () => {
  return (
    <div className="App">
      <div className="h-auto box-border flex flex-col text-center">
        <Header />
        <div className="flex flex-col sm:flex-row flex-1">
          <aside className=" p-6 m-2 flex-[1_1_100px] border-2 border-black rounded-badge hover:bg-slate-500 duration-200">
            <ListOfIncomes />
          </aside>
          <main className=" p-20 m-2 flex-[5_5_150px] border-2 border-black rounded-badge">
            <div>
              <h1>Total Income Earnings this month</h1>
              <span className="text-green-500 text-2xl font-[Poppins-bold]">+ $16810.76</span>
            </div>
            <div>
              <h1>Total Expenses Paid this month</h1>
              <span className="text-red-500 text-2xl font-[Poppins-bold]">- $16810.76</span>
            </div>
            <div>

            </div>
          </main>
          <aside className=" p-6 m-2 flex-[1_1_100px] border-2 border-black rounded-badge hover:bg-slate-500 duration-200">
            <RecentExpenses />
          </aside>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserPage;
