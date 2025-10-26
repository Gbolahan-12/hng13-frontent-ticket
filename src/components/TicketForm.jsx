import React, { useState, useEffect } from "react";

export default function TicketForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("open");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");
    onSubmit({ title, status });
    setTitle("");
    setStatus("open");
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <input
        type="text"
        placeholder="Ticket title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="closed">Closed</option>
      </select>
      <button type="submit">{initialData ? "Update" : "Add"} Ticket</button>
    </form>
  );
}
