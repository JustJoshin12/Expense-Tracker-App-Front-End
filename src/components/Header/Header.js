import Navbar from "../Navbar/Navbar";
import Logo from "../../images/logo.png";
import UserIcon from "../UserIcon.js/UserIcon";

const Header = () => {
  return (
    <header className=" p-5 m-5 flex justify-around rounded-badge border-4 border-black tracking-wider shadow-2xl shadow-sky-500">
      <div className="flex flex-col ">
        <img src={Logo} className="w-[150px]" />
        <h1 className="text-2xl font-[Poppins-extrabold]">Budget Beacon</h1>
      </div>
      <Navbar />
      <UserIcon />
    </header>
  );
};

export default Header;
