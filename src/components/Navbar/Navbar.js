
const Navbar = () => {
  return (
    <nav className="flex items-center text-2xl font-[Poppins-bold] text-primary">
      <ul className="flex list-none p-0 m-0">
        <li className="flex-grow text-center">
          <a href="#home" className="block py-4 px-6 hover:bg-gray-700 hover:shadow-lg hover:text-secondary transition duration-200 ease-in-out">
            Home
          </a>
        </li>
        <li className="flex-grow text-center">
          <a href="#expenses" className="block py-4 px-6 hover:bg-gray-700 hover:shadow-lg hover:text-secondary transition duration-200 ease-in-out">
            Expenses
          </a>
        </li>
        <li className="flex-grow text-center">
          <a href="#income" className="block py-4 px-6 hover:bg-gray-700 hover:shadow-lg hover:text-secondary transition duration-200 ease-in-out">
            Income
          </a>
        </li>
        <li className="flex-grow text-center">
          <a href="#settings" className="block py-4 px-6 hover:bg-gray-700 hover:shadow-lg hover:text-secondary transition duration-200 ease-in-out">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
