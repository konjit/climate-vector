import { NavLink } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle"
import "../../styles/Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isDark, setIsDark] = useState(() => {
      return localStorage.getItem("theme") === "dark";
    });
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

  return (
    <header>
      <div className="navbar-container">
        <NavLink
          to="/infoboard"
          // mental note window.location.pathname === "/infoboard"
          className={({ isActive }) =>
            `brand ${isActive ? "active-brand" : ""}`
          }
        >
          ClimateVector
        </NavLink>

        <nav>
          <ul className="navbar-list">
            <li>
              <NavLink
                to="/charts"
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "active-link" : ""}`
                }
              >
                Charts
              </NavLink>
            </li>
          </ul>
        </nav>
        <ThemeToggle checked={isDark} onChange={setIsDark} />
      </div>
    </header>
  );
};

export default Navbar;
