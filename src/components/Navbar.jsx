import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const session = localStorage.getItem("ticketapp_session");

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/auth/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🎟️ TicketApp</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {session && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/tickets">Tickets</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
        {!session && (
          <li><Link to="/auth/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}
