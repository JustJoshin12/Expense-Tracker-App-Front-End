import LoginPage from "../Login/Login";
import SignupPage from "../Signup/SignUp";
import UserPage from "../UserPage/UserPage";
import Logo from "../../images/logo.png";
import anime from "../../images/anime.jpg";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return <UserPage />;
}

export default App;
