import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeadset,
  FaShieldAlt
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-hero">
      <h1>Contact</h1>

  <p>
    Have questions about courses, certifications,
    enterprise learning solutions, or platform support?
    The Xebia LMS team is ready to help.
    Connect with us and discover how we can empower
    continuous learning and professional growth.
  </p>
        <h1>Get In Touch</h1>

        <p>
          Whether you're a learner, trainer,
          or enterprise client, we're here
          to support your learning journey.
        </p>

      </section>

      <section className="contact-main">

        <div className="contact-form-card">

          <h2>Send a Message</h2>

          <div className="row">
            <input
              type="text"
              placeholder="First Name"
            />

            <input
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className="row">
            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Phone Number"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="How can we help?"
          ></textarea>

          <button>
            Send Message
          </button>

        </div>

        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope />
            <h3>Email Support</h3>
            <p>support@xebialms.com</p>
          </div>

          <div className="info-card">
            <FaPhone />
            <h3>Phone Support</h3>
            <p>+91 1800-000-000</p>
          </div>

          <div className="info-card">
            <FaHeadset />
            <h3>Learning Support</h3>
            <p>24/7 Assistance</p>
          </div>

          <div className="info-card">
            <FaShieldAlt />
            <h3>Account Security</h3>
            <p>Identity & Access Help</p>
          </div>

        </div>

      </section>

      <section className="office-section">

        <h2>Global Offices</h2>

        <div className="office-grid">

          <div className="office-card">
            🇮🇳 India
            <p>Bangalore</p>
          </div>

          <div className="office-card">
            🇺🇸 USA
            <p>Atlanta</p>
          </div>

          <div className="office-card">
            🇳🇱 Netherlands
            <p>Hilversum</p>
          </div>

          <div className="office-card">
            🇬🇧 United Kingdom
            <p>London</p>
          </div>

        </div>

      </section>

      <section className="quick-help">

        <h2>Need Immediate Assistance?</h2>

        <div className="help-grid">

          <div className="help-card">
            💻 Technical Support
          </div>

          <div className="help-card">
            🎓 Learning Support
          </div>

          <div className="help-card">
            🏆 Certification Help
          </div>

          <div className="help-card">
            🔒 Account Recovery
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}