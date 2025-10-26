import React from "react";

export default function TicketCard({ ticket, onEdit, onDelete }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "open": return "green";
      case "in_progress": return "orange";
      case "closed": return "gray";
      default: return "black";
    }
  };

  return (
    <div className="ticket-card" style={{ borderLeft: `5px solid ${getStatusColor(ticket.status)}` }}>
      <h3>{ticket.title}</h3>
      <p>Status: <strong>{ticket.status}</strong></p>
      <div className="actions">
        <button onClick={() => onEdit(ticket)}>Edit</button>
        <button onClick={() => onDelete(ticket.id)}>Delete</button>
      </div>
    </div>
  );
}
