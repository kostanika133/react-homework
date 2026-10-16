import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isCorrect =
    email === "digitalAcademy@gmail.com" && password === "iLoveReact123";

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" disabled={!isCorrect} onClick={onLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
