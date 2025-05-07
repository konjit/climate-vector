import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { Bell } from "lucide-react";
import ThemeToggle from "../../theme/ThemeToggle";

import "../../styles/Navbar.css";

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
        <div className="brand-container">
          <NavLink
            to="/infoboard"
            className={({ isActive }) =>
              `brand ${isActive ? "active-brand" : "brand"}`
            }
          >
            ClimateVector
          </NavLink>
        </div>

        <nav>
          <ul className="navbar-list">
            <li>
              <NavLink
                to="/charts"
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "active-link" : ""}`
                }
              >
                Data & Charts
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="theme-toggle-container">
          <Bell
            size={20}
            style={{
              color: "var(--primary-color)",
            }}
          />
        </div>
        <div className="theme-toggle-container">
          <ThemeToggle checked={isDark} onChange={setIsDark} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
