import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

import logo from "../assets/a9232d4a-a72f-421d-82f8-5e3bd90a9003.jpg";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <img
        src={logo}
        alt="Xebia Logo"
        className="navbar-logo"
      />

      <div
        className="hamburger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/faq"
          onClick={() => setMenuOpen(false)}
        >
          FAQ's
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

        <Link
          to="/login"
          onClick={() => setMenuOpen(false)}
        >
          <button className="login-btn">
            Login
          </button>
        </Link>

      </div>

    </motion.nav>
  );
}