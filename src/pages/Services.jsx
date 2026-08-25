function Services() {
  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <h1>Our Services</h1>
        <p>Professional Electrical & Fire Safety Solutions</p>
      </section>

      {/* Services */}
      <section className="all-services">
        <div className="service-detail">
          <div className="service-icon">⚡</div>

          <div>
            <h2>Electrical Works</h2>

            <p>
              We provide reliable electrical installation, maintenance and
              repair services for residential, commercial and industrial
              projects.
            </p>

            <ul>
              <li>Electrical Installation</li>
              <li>Electrical Maintenance</li>
              <li>Electrical Repair</li>
              <li>Industrial Electrical Works</li>
            </ul>
          </div>
        </div>

        <div className="service-detail">
          <div className="service-icon">🔌</div>

          <div>
            <h2>Electrical Panels</h2>

            <p>
              We provide electrical panel solutions for distribution, metering
              and industrial applications.
            </p>

            <ul>
              <li>Distribution Panels</li>
              <li>Metering Panels</li>
              <li>Electrical Control Panels</li>
              <li>Panel Installation & Maintenance</li>
            </ul>
          </div>
        </div>

        <div className="service-detail">
          <div className="service-icon">🔥</div>

          <div>
            <h2>Fire Safety Systems</h2>

            <p>
              Complete fire protection solutions to help businesses improve fire
              safety and preparedness.
            </p>

            <ul>
              <li>Fire Hydrant Systems</li>
              <li>Fire Alarm Systems</li>
              <li>Fire Hose Reels</li>
              <li>Fire Safety Equipment</li>
            </ul>
          </div>
        </div>

        <div className="service-detail">
          <div className="service-icon">🛠️</div>

          <div>
            <h2>Maintenance Services</h2>

            <p>
              Regular maintenance and support to keep electrical and safety
              systems operating reliably.
            </p>

            <ul>
              <li>Electrical Maintenance</li>
              <li>Panel Maintenance</li>
              <li>Fire System Maintenance</li>
              <li>Inspection & Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="service-cta">
        <h2>Need Our Services?</h2>

        <p>
          Contact us today to discuss your electrical or fire safety
          requirements.
        </p>

        <button>Request a Quote</button>
      </section>
    </div>
  );
}

export default Services;
