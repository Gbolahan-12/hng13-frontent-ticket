import { Outlet, Link } from 'react-router-dom'
export default function App(){
  function logout(){ localStorage.removeItem('ticketapp_session'); window.location.href='/' }
  return (
    <>
      <header className="header container">
        <div className="brand">TicketApp</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/auth/login">Login</Link>
          <button onClick={logout} style={{marginLeft:10}}>Logout</button>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
