import React, { useState, useEffect } from "react";
import TicketForm from "../components/TicketForm";
import TicketCard from "../components/TicketCard";

export default function Tickets() {
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem("tickets");
    return saved ? JSON.parse(saved) : [];
  });
  const [editing, setEditing] = useState(null);

  // Persist tickets to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  const handleAdd = (ticketData) => {
    if (editing) {
      setTickets((prev) =>
        prev.map((t) => (t.id === editing.id ? { ...t, ...ticketData } : t))
      );
      setEditing(null);
    } else {
      setTickets([...tickets, { id: Date.now(), ...ticketData }]);
    }
  };

  const handleDelete = (id) => {
    setTickets(tickets.filter((t) => t.id !== id));
  };

  return (
    <div className="ticket-wrapper">
      <div className="tickets">
        <h1>Ticket Management</h1>
        <TicketForm onSubmit={handleAdd} initialData={editing} />
        <div className="ticket-list">
          {tickets.length === 0 ? (
            <p>No tickets yet</p>
          ) : (
            tickets.map((t) => (
              <TicketCard
                key={t.id}
                ticket={t}
                onEdit={setEditing}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
