import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "3px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  link: {
    textAlign: "center",
    display: "block",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: "15px",
  },
};

function Login() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist") {
        navigate("/homelog", { state: { id: email } });
      }
    } catch (error) {
      alert("Wrong details");
      console.error(error);
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center" }}>Signup</h1>

      <form style={styles.form}>
        <label style={styles.label}>
          First Name:
        </label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
          style={styles.input}
        />

        <label style={styles.label}>
          Last Name:
        </label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          style={styles.input}
        />

        <label style={styles.label}>
          Email:
        </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={styles.input}
        />

        <label style={styles.label}>
          Password:
        </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          style={styles.input}
        />

        <button type="submit" onClick={submit} style={styles.button}>
          Signup
        </button>
      </form>

      <div style={{ textAlign: "center", margin: "15px 0" }}>
        <p style={{ margin: "0", fontWeight: "bold" }}>OR</p>
      </div>

      <Link to="/login" style={styles.link}>
        Login Page
      </Link>
    </div>
  );
}

export default Login;
