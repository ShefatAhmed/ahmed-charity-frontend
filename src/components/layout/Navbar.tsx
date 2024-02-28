import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { logtout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { AlignCenter } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useAppSelector(useCurrentToken);
  const handleLogout = () => {
    dispatch(logtout());
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleOpen = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleClose = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="px-2 mx-auto flex justify-between items-center shadow-lg">
      <NavLink to="/" className="flex items-center">
        <img
          src="https://i.postimg.cc/15K9nBJF/Screenshot-2024-02-16-at-23-57-18-Logo-Maker-Used-By-2-3-Million-Startups.png"
          className="w-48 max-w-full"
          alt=""
        />
      </NavLink>
      <ul className="hidden sm:flex sm:justify-between sm:items-center space-x-10 text-lg font-extrabold mr-4">
        <NavLink
          to="/donations"
          onClick={toggleClose}
          className="hover:underline hover:text-teal-700"
        >
          All Donations
        </NavLink>
        {token && (
          <NavLink
            to="/dashboard"
            onClick={toggleClose}
            className="hover:underline hover:text-teal-700"
          >
            Dashboard
          </NavLink>
        )}
        {token ? (
          <button
            onClick={handleLogout}
            className="btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
          >
            Login
          </NavLink>
        )}
      </ul>
      <div className="sm:hidden relative">
        <button
          onClick={toggleOpen}
          className="text-black p-2 focus:outline-none  rounded-md"
        >
          <AlignCenter className="w-6 h-6" />
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute right-0 mt-2 bg-white border rounded-md shadow-md py-2 w-48`}
        >
          <NavLink
            to="/donations"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-extrabold"
            onClick={toggleClose}
          >
            All Donations
          </NavLink>
          {token && (
            <NavLink
              to="/dashboard"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-extrabold"
              onClick={toggleClose}
            >
              Dashboard
            </NavLink>
          )}
          {token ? (
            <button
              onClick={handleLogout}
              className="block glass bg-teal-500 rounded-lg text-white px-10 text-center hover:bg-teal-800 font-bold mx-auto"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="block glass bg-teal-500 rounded-lg text-white p-1 text-center hover:bg-teal-800 mx-3"
              onClick={toggleClose}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
