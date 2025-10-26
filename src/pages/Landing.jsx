import landImg from '../../src/assets/images/ticketImg.jpg'
export default function Landing(){
  return (
    <section className="hero">
      <div className="hero-inner container">
        <div>
          <h1 className="hero-title">TicketApp — Manage issues effortlessly</h1>
          <p>A tiny demo app built in React. Create, track, and resolve tickets.</p>
          <div className="hero-cta">
            <a href="/auth/signup"><button>Get Started</button></a>
            <a href="/auth/login"><button style={{background:'#333'}}>Login</button></a>
          </div>
        </div>
        <div className="card" aria-hidden="true">
          <img src={landImg} alt="" />
        </div>
      </div>
      <div className="dec-circle c1"></div>
      <div className="dec-circle c2"></div>
      {/* wave */}
      <svg className="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,0 C360,120 720,0 1440,80 L1440,120 L0,120 Z" fill="#ffffff"></path>
      </svg>
      <footer className="container" style={{padding:'1rem'}}>© TicketApp 2025. All rights reserved.</footer>

    </section>
  )
}
