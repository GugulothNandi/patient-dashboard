import React from "react";
import { NavLink } from "react-router-dom";

function TopNav() {
  const getLinkClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-gray-700";

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            JC
          </div>
          <div>
            <div className="text-lg font-bold">Jarurat Care</div>
            <div className="text-xs text-gray-500">
              Patient Records Dashboard
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/patients" className={getLinkClass}>
            Patients
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default TopNav;
