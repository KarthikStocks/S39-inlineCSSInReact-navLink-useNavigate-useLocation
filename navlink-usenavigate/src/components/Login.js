import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Login() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Function to validate email and password
  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setMessage("Invalid email address");
      return false;
    }

    if (!passwordRegex.test(password)) {
      setMessage(
        "Password must be at least 8 characters and include letters and numbers"
      );
      return false;
    }

    setMessage("Login successful!");
    return true;
  };

  const handleSubmit = () => {
    validate();
  };

  return (
    <div className="container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            ref={emailInputRef}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            ref={passwordInputRef}
          />
        </div>
        {message && (
          <p
            style={{
              color: message === "Login successful!" ? "green" : "red",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            {message}
          </p>
        )}
        <div>
          <button
            type="button"
            className="submit-button"
            onClick={() => {
              let typedEmail = emailInputRef.current.value;
              let typedPassword = passwordInputRef.current.value;

              if (typedEmail == "graph@gmail.com" && typedPassword == "graph") {
                navigate("/dashboard", {
                  state: {
                    para1:
                      "Nifty 50 opened a bit above yesterday’s closing point and rose quickly. However, at around 11:53 AM, Nifty 50 stocks saw a sudden dip. Overall, markets were flat. Realty stocks rose over 2% today.",
                    pic: "./image/graph.png",
                  },
                });
              } else {
                setMessage("Invalid email or password.");
              }
            }}
          >
            Login
          </button>
        </div>
      </form>
      <div className="redirect-link">
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="link-button">
            Signup
          </Link>
        </p>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Login;
