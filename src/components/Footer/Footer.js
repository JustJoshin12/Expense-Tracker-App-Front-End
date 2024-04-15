import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10  border-2 border-black rounded-badge shadow-lg shadow-primary font-[Poppins] m-5 w-auto ">
      <aside>
        <img className="w-[150px]" src={Logo} />
        <p className="font-bold text-xl">
          <span className="text-2xl">Budget Beacon.</span>
          <br />
          Providing reliable service since 2010
        </p>
      </aside>
      <p className="w-[60%] font-[Poppins] text-lg">
        "Maximize Your Financial Potential with Budget Beacon. Elevate your
        spending efficiency and embrace financial growth, one transaction at a
        time. Every smart decision today is a step towards your financial
        well-being tomorrow. Keep tracking, keep thriving."
      </p>
      <p>Copyright © 2024 - All right reserved</p>
    </footer>
  );
};

export default Footer;
