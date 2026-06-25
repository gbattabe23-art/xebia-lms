import Navbar from "../components/Navbar";
import { FaGithub, FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("user");
const [errors, setErrors] = useState({});
const navigate = useNavigate();
const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/");

      console.log({
        email,
        password,
        role,
      });
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-page">

        <div className="login-left">

          <h1>
            "Learn coding, design, and more from the best in the industry."
          </h1>

          <p>
            Welcome back! Please login to your account.
          </p>
        </div>

        <div className="login-right">

          <div className="login-card">

            <div className="input-group">
              <label>Email Address</label>

              <div className="input-box">
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="you@example.com"
                   value={email}
  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="input-box">
                <FaLock />
                <input
                  type="password"
                  placeholder="••••••••"
                   value={password}
  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="login-options">
              <div>
                <input type="checkbox" />
                <span> Remember Me</span>
              </div>

              <a href="/">Forgot Password?</a>
            </div>

            <button className="login-main-btn"
              onClick={handleLogin}>
              Login
            </button>

            <div className="divider">
              <span>Or login with</span>
            </div>

            <div className="social-buttons">

              <button>
                <FaGithub />
                GitHub
              </button>

              <button>
                <FaGoogle />
                Google
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}