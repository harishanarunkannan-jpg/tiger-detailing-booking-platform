import { Link } from "react-router-dom";

import danuPhoto from "../assets/Team/danu.png";
import harishanPhoto from "../assets/Team/harishan.png";
import jasakanPhoto from "../assets/Team/jasakan.png";
import vinuPhoto from "../assets/Team/vinu.png";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">BRAMPTON CAR DETAILING</p>

          <h1>
            Give Your Vehicle
            <br />
            The Detail It Deserves.
          </h1>

          <p>
            Reliable interior and exterior detailing with simple online
            booking and appointment management.
          </p>

          <div className="hero-buttons">
            <Link to="/booking">
              <button className="primary-btn">
                Book Appointment
              </button>
            </Link>

            <Link to="/services">
              <button className="secondary-btn">
                View Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-info">
        <div>
          <h2>Simple Booking</h2>

          <p>
            Choose your service, date, and preferred appointment time.
          </p>
        </div>

        <div>
          <h2>Flexible Scheduling</h2>

          <p>
            Reschedule your detailing appointment whenever plans change.
          </p>
        </div>

        <div>
          <h2>Easy Management</h2>

          <p>
            View, edit, and cancel appointments directly from the website.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="team-header">
          <p className="team-tag">MEET THE CREW</p>

          <h2>Our Team</h2>

          <p>
            Tiger Detailing is operated by a four-person team committed to
            providing reliable service and giving back to the community.
          </p>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <img
              src={danuPhoto}
              alt="Danushan Uthayakumar"
              className="team-photo"
            />

            <div className="team-card-content">
              <h3>Danushan Uthayakumar</h3>

              <p className="team-role">
                Co-Founder
              </p>

              <p className="team-description">
                Supports vehicle detailing, customer service,
                and the overall operation of Tiger Detailing.
              </p>
            </div>
          </div>

          <div className="team-card">
            <img
              src={harishanPhoto}
              alt="Harishan Arunkannan"
              className="team-photo"
            />

            <div className="team-card-content">
              <h3>Harishan Arunkannan</h3>

              <p className="team-role">
                Founder
              </p>

              <p className="team-description">
                Leads operations, customer service, vehicle detailing,
                and the development of Tiger Detailing's digital booking
                platform.
              </p>
            </div>
          </div>

          <div className="team-card">
            <img
              src={jasakanPhoto}
              alt="Jasakan Jegatheesvaran"
              className="team-photo"
            />

            <div className="team-card-content">
              <h3>Jasakan Jegatheesvaran</h3>

              <p className="team-role">
                Co-Founder
              </p>

              <p className="team-description">
                Supports vehicle detailing operations, customer coordination,
                and the delivery of reliable detailing services.
              </p>
            </div>
          </div>

          <div className="team-card">
            <img
              src={vinuPhoto}
              alt="Vinushanth Tharmaseelan"
              className="team-photo"
            />

            <div className="team-card-content">
              <h3>Vinushanth Tharmaseelan</h3>

              <p className="team-role">
                Co-Founder
              </p>

              <p className="team-description">
                Contributes to detailing operations, service quality,
                and day-to-day team coordination.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;