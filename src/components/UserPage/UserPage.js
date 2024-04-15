import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../HomePage/HomePage";
import ExpensePage from "../ExpensePage/ExpensePage";
import IncomePage from "../IncomePage/IncomePage";

const UserPage = () => {
  const [page, setPage] = useState("home");

  const handlePageChange = (name) => {
    setPage(name);
  };

  return (
    <div className="App">
      <div className="h-auto box-border flex flex-col text-center">
        <Header handlePageChange={handlePageChange}/>
        {page === "home" && <HomePage/>}
        {page === "expense" && <ExpensePage/>}
        {page === "income" && <IncomePage/>}
        <Footer />
      </div>
    </div>
  );
};

export default UserPage;
