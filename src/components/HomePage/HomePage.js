import RecentExpenses from "../ExpenseSection/ExpenseSection";
import ListOfIncomes from "../IncomeSection/IncomeSection";
import { BarChart } from "@mui/x-charts/BarChart";
import ArrowDown from "../../images/chevron-down.svg";
import { Tab } from "@headlessui/react";

const HomePage = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-1">
      <aside className=" p-6 m-2 flex-[1_1_100px] border-2 border-black rounded-badge hover:bg-slate-500 duration-200 shadow-lg shadow-primary">
        <ListOfIncomes />
      </aside>
      <main className="p-6 m-2 flex-[5_5_150px] border-2 border-black rounded-badge shadow-lg shadow-primary">
        <h2 className="text-3xl font-[Poppins-bold] p-5">March, 2024</h2>
        <div className="flex flex-row items-center gap-6 p-5">
          <div className="bg-secondary hover:bg-primary duration-300 p-5 rounded-badge">
            <div className="p-5">
              <Tab.Group>
                <Tab.List className="flex gap-10 justify-center text-2xl font-[Poppins-bold]">
                  <Tab className="ui-selected:border-b-2 border-neutral">
                    Day
                  </Tab>
                  <Tab className="ui-selected:border-b-2 border-neutral">
                    Week
                  </Tab>
                  <Tab className="ui-selected:border-b-2 border-neutral">
                    Month
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <BarChart
                      xAxis={[
                        {
                          scaleType: "band",
                          data: [
                            "17th",
                            "18th",
                            "19th",
                            "20th",
                            "21th",
                            "22nd",
                            "23rd",
                          ],
                        },
                      ]}
                      series={[
                        {
                          data: [4, 3, 5, 7, 3, 3, 5],
                          label: "expense",
                          color: "red",
                        },
                        {
                          data: [1, 6, 3, 6, 9, 2, 6],
                          label: "income",
                          color: "green",
                        },
                      ]}
                      width={700}
                      height={300}
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <BarChart
                      xAxis={[
                        {
                          scaleType: "band",
                          data: ["week 1", "week 2", "week 3", "week 4"],
                        },
                      ]}
                      series={[
                        {
                          data: [400, 270, 570, 190],
                          label: "expense",
                          color: "red",
                        },
                        {
                          data: [1000, 630, 430, 550],
                          label: "income",
                          color: "green",
                        },
                      ]}
                      width={700}
                      height={300}
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <BarChart
                      xAxis={[
                        {
                          scaleType: "band",
                          data: ["January", "February", "March"],
                        },
                      ]}
                      series={[
                        { 
                          data: [4, 3, 5],
                          label: "income",
                          color: "green",
                        },
                        { 
                          data: [1, 6, 3],
                          label: "expense",
                          color: "red",
                         },
                      ]}
                      width={500}
                      height={300}
                    />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
          <div className="bg-secondary hover:bg-primary hover:text-secondary duration-200 p-10 rounded-badge">
            <h2 className="font-[Poppins-bold] text-2xl">Recent History</h2>
            <h3 className="text-2xl font-[Poppins-bold] py-2">Rent</h3>
            <p className="text-red-500 text-2xl font-[Poppins-bold]">
              -1625.25
            </p>
            <div className="collapse bg-accent mt-4">
              <input type="checkbox" />
              <div className="collapse-title p-5 text-secondary-500 text-2xl font-[Poppins-bold] flex items-center justify-center">
                Description <img src={ArrowDown} className="pl-2" />
              </div>
              <div className="collapse-content">
                <p className="text-lg font-[Poppins-bold]">
                  Paid Rent this month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-5 justify-center gap-10">
          <div className="bg-secondary hover:bg-primary hover:text-secondary duration-200 p-10 rounded-badge my-auto">
            <h2 className="font-[Poppins-bold] text-2xl">
              Total Net Balance <br /> this month
            </h2>
            <p className="text-green-500 text-3xl font-[Poppins-bold] p-3">
              + $10000
            </p>
          </div>
          <div className="bg-secondary hover:bg-primary hover:text-secondary duration-200 p-10 rounded-badge">
            <h3 className="text-2xl font-[Poppins-bold]">
              My Goals this month
            </h3>
            <ul className="list-disc text-left p-4">
              <li className="font-[Poppins-bold]">
                Pay off car
                <progress
                  className="progress progress-accent w-20 ml-2 border border-accent"
                  value="40"
                  max="100"
                ></progress>
                $498
              </li>
              <li className="font-[Poppins-bold]">
                Save for birthday trip
                <progress
                  className="progress progress-accent w-20 ml-2 border border-accent"
                  value="40"
                  max="100"
                ></progress>
              </li>
              <li className="font-[Poppins-bold]">
                Save for house
                <progress
                  className="progress progress-accent w-20 ml-2 border border-accent"
                  value="40"
                  max="100"
                ></progress>
              </li>
              <li className="font-[Poppins-bold]">
                Pay off student loans{" "}
                <progress
                  className="progress progress-accent w-20 ml-2 border border-accent"
                  value="40"
                  max="100"
                ></progress>
              </li>
              <li className="font-[Poppins-bold] text-ellipsis">
                Save for Anime Central Cosplays{" "}
                <progress
                  className="progress progress-accent w-20 ml-2 border border-accent"
                  value="40"
                  max="100"
                ></progress>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <aside className=" p-6 m-2 flex-[1_1_100px] border-2 border-black rounded-badge hover:bg-slate-500 duration-200 shadow-lg shadow-primary">
        <RecentExpenses />
      </aside>
    </div>
  );
};

export default HomePage;
