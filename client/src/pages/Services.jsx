function Services() {
  return (
    <div className="page">
      <div className="page-title">
        <h1>Our Services</h1>
        <p>Choose the detailing package that works best for your vehicle.</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <h2>Exterior Detail</h2>
          <p>Exterior wash, wheel cleaning, and tire shine.</p>
          <div className="price">$30</div>
        </div>

        <div className="service-card">
          <h2>Interior Detail</h2>
          <p>Vacuuming, dashboard cleaning, and interior surface cleaning.</p>
          <div className="price">$45</div>
        </div>

        <div className="service-card">
          <h2>Full Detail</h2>
          <p>Complete interior and exterior vehicle cleaning.</p>
          <div className="price">$70</div>
        </div>
      </div>
    </div>
  );
}

export default Services;