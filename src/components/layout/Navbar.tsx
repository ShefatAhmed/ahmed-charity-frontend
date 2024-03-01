import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { logtout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { AlignCenter } from "lucide-react";
import { useEffect, useState } from "react";

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
  //theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggle = (e: any) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    const localTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", localTheme as string);
  }, [theme]);
  return (
    <nav className="px-2 mx-auto flex justify-between items-center shadow-lg overflow-x-auto">
      <NavLink to="/" className="flex items-center">
        <img
          src="https://i.postimg.cc/jqytcJxV/1.png"
          className="w-48 max-w-full"
          alt=""
        />
      </NavLink>
      <ul className="hidden sm:flex sm:justify-between sm:items-center space-x-10 text-lg font-extrabold mr-4">
        <NavLink
          to="/donations"
          onClick={toggleClose}
          className="hover:underline"
        >
          All Donations
        </NavLink>
        <NavLink
          to="/leaderboard"
          onClick={toggleClose}
          className="hover:underline"
        >
          Leaderboard
        </NavLink>
        <NavLink
          to="/community"
          onClick={toggleClose}
          className="hover:underline"
        >
          Community
        </NavLink>
        <NavLink
          to="/volunteer"
          onClick={toggleClose}
          className="hover:underline"
        >
          Volunteer
        </NavLink>
        {token && (
          <NavLink
            to="/dashboard"
            onClick={toggleClose}
            className="hover:underline"
          >
            Dashboard
          </NavLink>
        )}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
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
        <div className="flex items-center">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <button
            onClick={toggleOpen}
            className="text-teal-500 p-2 focus:outline-none  rounded-md"
          >
            <AlignCenter className="w-6 h-6" />
          </button>
        </div>
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
          <NavLink
            to="/leaderboard"
            onClick={toggleClose}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-extrabold"
          >
            Leaderboard
          </NavLink>
          <NavLink
            to="/community"
            onClick={toggleClose}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-extrabold"
          >
            Community
          </NavLink>
          <NavLink
            to="/volunteer"
            onClick={toggleClose}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-extrabold"
          >
            Volunteer
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
