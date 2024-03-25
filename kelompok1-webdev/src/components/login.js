import React, { useRef, useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import { Modal, Button } from 'react-bootstrap';
import './login.css'; 

export default function Login(props) {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const cookies = new Cookies();
  const [loginError, setLoginError] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

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
        console.log("Logging in...");
        props.onLogin();
        console.log("Login successful!");
      } else {
        console.error('Token not found in response');
        setLoginError(true);
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError(true);
      setShowErrorModal(true);
    }
  }

  const handleRegisterClick = () => {
    props.onRegisterClick();
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false); 
    setLoginError(false); 
  }

  return (
    <div className="login-form">
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

      {/* Bootstrap Modal */}
      <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Gagal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Login Gagal. Silahkan cek email dan password anda.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
