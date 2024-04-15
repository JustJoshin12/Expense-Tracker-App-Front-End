
const Navbar = ({handlePageChange}) => {
  return (
    <nav className="flex items-center text-2xl font-[Poppins-bold] text-primary">
      <ul className="flex list-none p-0 m-0">
        <li className="flex-grow text-center">
          <button className="block py-4 px-6 hover:bg-gray-700 hover:shadow-lg hover:text-secondary transition duration-200 ease-in-out" onClick={() => {handlePageChange('home')}}>
            Home
          </button>
        </li>
        <li className="flex-grow text-center">
          <button className="block py-4 px-6 hover:bg-gray-700 hover:shadow-lg hover:text-secondary transition duration-200 ease-in-out" onClick={() => {handlePageChange('expense')}}>
            Expenses
          </button>
        </li>
        <li className="flex-grow text-center">
          <button className="block py-4 px-6 hover:bg-gray-700 hover:shadow-lg hover:text-secondary transition duration-200 ease-in-out" onClick={() => {handlePageChange('income')}}>
            Income
          </button>
        </li>
        <li className="flex-grow text-center">
          <button className="block py-4 px-6 hover:bg-gray-700 hover:shadow-lg hover:text-secondary transition duration-200 ease-in-out">
           Goals
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
