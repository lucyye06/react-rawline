import { useState } from "react";

type LoginProps = {
  closeModal: () => void;
  showSignup: () => void;
};

function Login({ closeModal, showSignup }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Fill this field!");
      return;
    }

    alert("LOG-IN SUCCESSFULLY!");

    setEmail("");
    setPassword("");
    closeModal();
  };

  return (
    <div className="modal-overlay">

      <div className="login-card">

        <span className="close" onClick={closeModal}>×</span>

        <form id="loginSection" onSubmit={handleLogin}>

          <h2 style={{ color: "#ffffff" }}>Log In</h2>
          <p className="login-sub">Connect with your RAWLINE account</p>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <a href="#" className="forgot-password">Forgot Password?</a>

          <button type="submit" className="login-btn">
            Log In
          </button>

          <p className="or-divider">OR</p>

          <button
            type="button"
            className="signup-btn"
            onClick={showSignup}
          >
            Create New Account
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;