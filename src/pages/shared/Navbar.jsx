import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("User logged out");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>Instructors</a>
      </li>
      <li>
        <a>Classes</a>
      </li>
      {user && (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
          <li>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          </li>
        </>
      )}
      {!user && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label onClick={toggleMenu} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-4xl font-bold">
          SportsMania
        </Link>
      </div>
      <div className={`navbar-end ${isOpen ? "block" : "hidden"} lg:flex`}>
        <ul
          className={`flex items-center menu menu-horizontal px-1 text-xl font-semibold`}
        >
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
