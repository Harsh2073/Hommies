import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import Logo from "/src/assets/logo.png";

const Header = ({ onLogout }) => {
  const navigate = useNavigate();
  const { isAuth, user } = useSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogOut = () => {
    onLogout();
    navigate("/login");
  };

  const handleProfileClick = () => {
    setDropdownOpen(false);
    navigate("/profile");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Optional: Close dropdown after login
  useEffect(() => {
    setDropdownOpen(false);
  }, [isAuth]);

  const capitalize = (word) =>
    word?.charAt(0).toUpperCase() + word?.slice(1).toLowerCase();
  const firstName = capitalize(user?.name?.split(" ")[0] || "");

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/service", label: "Services" },
    { to: "/property", label: "Property" },
    { to: "/agents", label: "Agents" },
    { to: "/mblog", label: "Blog" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-36 h-auto hover:scale-95 transition-transform duration-200 ease-in-out"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-violet-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label, onClick }) => (
            <Link
              key={to}
              to={to}
              onClick={onClick}
              className="text-lg font-medium text-gray-800 relative group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-violet-700 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}

          <div className="w-px h-6 bg-gray-400 mx-4 hidden md:block"></div>

          {isAuth ? (
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                <CgProfile className="text-2xl text-violet-700" />
                <span className="text-lg font-semibold text-gray-800">
                  {firstName.toUpperCase()}
                </span>
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-50">
                  <button
                    onClick={handleProfileClick}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-white bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-indigo-600 hover:to-violet-500 px-6 py-2 rounded-3xl text-lg font-semibold shadow-lg transform hover:scale-105 transition"
            >
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[500px] mt-4" : "max-h-0"
          }`}
      >
        <div className="flex flex-col gap-4 bg-white px-6 py-4 rounded-lg shadow-md">
          {navLinks.map(({ to, label, onClick }) => (
            <Link
              key={to}
              to={to}
              onClick={() => {
                setMenuOpen(false);
                if (onClick) onClick();
              }}
              className="text-lg font-medium text-gray-800 hover:text-violet-700 transition duration-200"
            >
              {label}
            </Link>
          ))}

          <div className="border-t border-gray-300 my-2" />

          {isAuth ? (
            <div className="flex flex-col gap-2">
              <button
                onClick={handleProfileClick}
                className="text-left text-gray-800 hover:text-violet-700 transition"
              >
                Profile
              </button>
              <button
                onClick={handleLogOut}
                className="text-left text-gray-800 hover:text-violet-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-white bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-indigo-600 hover:to-violet-500 px-6 py-2 rounded-3xl text-center font-semibold shadow-md transition transform hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Header;
