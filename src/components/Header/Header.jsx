import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "/src/assets/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} className="w-36 h-auto" alt="Logo" />
        </Link>

        {/* Hamburger Icon - Mobile */}
        <button
          className="md:hidden text-3xl text-violet-700"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex gap-6 items-center justify-center text-xl transition-all duration-300 ease-in-out ${
            menuOpen ? "flex flex-col p-6 shadow-md" : "hidden md:flex"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 w-full md:w-auto">
            <Link
              className="hover:text-white transition hover:bg-violet-700 hover:px-2 hover:rounded-xl"
              to="/"
            >
              About
            </Link>
            <Link
              className="hover:text-white transition hover:bg-violet-700 hover:px-2 hover:rounded-xl"
              to="/"
              state={{ scrollTo: "services" }}
            >
              Services
            </Link>
            <Link
              className="hover:text-white transition hover:bg-violet-700 hover:px-2 hover:rounded-xl"
              to="/property"
            >
              Property
            </Link>
            <Link
              className="hover:text-white transition hover:bg-violet-700 hover:px-2 hover:rounded-xl"
              to="/Agents"
            >
              Agents
            </Link>
            <Link
              className="hover:text-white transition hover:bg-violet-700 hover:px-2 hover:rounded-xl"
              to="/"
              state={{ scrollTo: "blog" }}
            >
              Blog
            </Link>
            <Link
              className="hover:text-white transition hover:bg-violet-700 hover:px-2 hover:rounded-xl"
              to="/"
              state={{ scrollTo: "testimony" }}
            >
              Testimony
            </Link>
            <div className="hidden md:block w-px h-6 bg-gray-500"></div>
            {/* Login / Logout Buttons */}
            {isLoggedIn ? (
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <Link className="hover:text-violet-900 transition" to="/LogIn">
                  Log in
                </Link>
                <Link
                  className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition"
                  to="/SignUp"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
