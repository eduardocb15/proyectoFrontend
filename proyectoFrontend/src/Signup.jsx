import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useUserActions } from "./hooks/api";
import { useUser } from "./UserContext";
import "./Signup.css";

function Signup() {
  const [user] = useUser();
  const { signup } = useUserActions();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={handleSubmit} id="signup">
      <label>
        <span>Nombre:</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </label>
      <label>
        <span>Contraseña:</span>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Registro</button>
      <p>
        Ya estás registrado?
        <Link to="/login">Inicia sesión</Link>
      </p>
    </form>
  );
}

export default Signup;
