import {
  FaLinkedin,
  FaGithub,
  FaFacebookF,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="xebia-footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h1>Xebia</h1>

          <div className="brand-divider"></div>

          <p>
            Shaping Tomorrow
            <br />
            <span>with AI Today</span>
          </p>

        </div>

      </div>

      <div className="footer-content">

        <div className="footer-column">

          <h3>Learning</h3>

          <a href="#">Courses</a>
          <a href="#">Learning Paths</a>
          <a href="#">Certifications</a>
          <a href="#">Assessments</a>
          <a href="#">Resources</a>

        </div>

        <div className="footer-column">

          <h3>Legal</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Accessibility</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Sitemap</a>

        </div>

        <div className="footer-column">

          <h3>Company</h3>

          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Leadership</a>
          <a href="#">Careers</a>
          <a href="#">Newsletters</a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Xebia LMS. All Rights Reserved.
        </p>

        <div className="social-icons">

          <FaLinkedin />
          <FaGithub />
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />

        </div>

      </div>

    </footer>
  );
}