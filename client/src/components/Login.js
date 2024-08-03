// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  link: {
    marginTop: '15px',
    textAlign: 'center',
  },
};

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/', {
        email,
        password,
      });

      if (response.data === 'exist') {
        navigate('/homelog', { state: { id: email } });
      } else if (response.data === 'notexist') {
        alert('User has not signed up');
      }
    } catch (error) {
      alert('Wrong details');
      console.error(error);
    }
  }

  return (
    <div style={styles.container} className="login">
      <h1>Login</h1>

      <form action="POST" style={styles.form}>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button} onClick={submit}>
          Login
        </button>
      </form>

      <div style={styles.link}>
        <p>OR</p>
        <Link to="/register">Signup Page</Link>
      </div>
    </div>
  );
}

export default Login;
