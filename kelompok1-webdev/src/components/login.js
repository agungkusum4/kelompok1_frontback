import React, { useRef, useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import './login.css'; 

export default function Login(props) {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const cookies = new Cookies();
  const [loginError, setLoginError] = useState(false); // State to manage login error

  const handleLogin = async () => {
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;

    console.log({ email, password });

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      });

      if (response.data.success) {
        cookies.set("Authorization", response.data.token);
        console.log("Logging in..."); // Added log
        props.onLogin(); // Call onLogin function passed via props
        console.log("Login successful!"); // Added log
      } else {
        console.error('Token not found in response');
        setLoginError(true); // Set login error to true
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError(true); // Set login error to true
      // You can provide feedback to the user here
    }
  }

  const handleRegisterClick = () => {
    props.onRegisterClick(); // Call onRegisterClick function passed via props
  };

  return (
    <div className="login-form">
      {loginError && <p className='gagal'>Login gagal. Silakan cek email atau password Anda.</p>} {/* Display login error message */}
      <form>
        <div className="mb-3">
          <label htmlFor="input-email" className="form-label">
            Email address
          </label>
          <input ref={inputEmail} type="email" className="form-control" id="input-email" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-password" className="form-label">Password</label>
          <input ref={inputPassword}  type="password" className="form-control" id="input-password" />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleRegisterClick}>Register</button> {/* Add a Register button */}
      </form>
    </div>
  );
}
