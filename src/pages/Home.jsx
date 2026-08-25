function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small-title">
            PROFESSIONAL ELECTRICAL & FIRE SAFETY SERVICES
          </p>

          <h1>Reliable Solutions for Your Electrical & Fire Safety Needs</h1>

          <p className="hero-description">
            We provide professional electrical installation, maintenance and
            fire safety solutions for homes, offices and industries.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">Get a Free Quote</button>

            <button className="secondary-button">WhatsApp Us</button>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>

        <p className="section-description">
          Complete electrical and fire safety solutions from a trusted service
          provider.
        </p>

        <div className="service-cards">
          <div className="service-card">
            <h3>⚡ Electrical Works</h3>
            <p>
              Electrical installation, maintenance and repair services for
              residential and commercial projects.
            </p>
          </div>

          <div className="service-card">
            <h3>🔌 Electrical Panels</h3>
            <p>
              Supply and installation of electrical distribution and metering
              panels.
            </p>
          </div>

          <div className="service-card">
            <h3>🔥 Fire Safety</h3>
            <p>
              Fire hydrant, fire alarm and other fire protection system
              solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
