import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    closed: 0,
  });

  // Read ticket stats from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("tickets");
    if (saved) {
      const tickets = JSON.parse(saved);
      const open = tickets.filter((t) => t.status === "open").length;
      const inProgress = tickets.filter((t) => t.status === "in_progress").length;
      const closed = tickets.filter((t) => t.status === "closed").length;

      setStats({
        total: tickets.length,
        open,
        inProgress,
        closed,
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/");
  };

  return (
    <>
      <h1 className="dash-head">Dashboard</h1>
      <div className="dashboard">
        <div className="stats">
          <div className="card">Total Tickets: {stats.total}</div>
          <div className="card open">Open: {stats.open}</div>
          <div className="card progress">In Progress: {stats.inProgress}</div>
          <div className="card closed">Closed: {stats.closed}</div>

          <div className="buttons">
            <button onClick={() => navigate("/tickets")}>Manage Tickets</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}
