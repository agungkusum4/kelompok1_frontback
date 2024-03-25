import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap modal components

export default function Register(props) {
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const inputPhone = useRef(null);
  const inputConfirm_Password = useRef(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State for registration success

  const handleRegister = async () => {
    const name = inputName.current.value;
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    const phone = inputPhone.current.value;
    const confirm_password = inputConfirm_Password.current.value;

    console.log({ email, password, name, phone });

    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        name: name,
        email: email,
        password: password,
        phone: phone,
        confirm_password: confirm_password,
      });
      
      if (response.data.success) {
        console.log("Registrasi berhasil!");
        setRegistrationSuccess(true); // Set registration success to true
      } else {
        console.error('Token not found in response');
      }

    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="login-form">
      <form>
        <div className="mb-3">
          <label htmlFor="input-name" className="form-label">Nama</label>
          <input ref={inputName} type="text" className="form-control" id="input-name" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-email" className="form-label">Email address</label>
          <input ref={inputEmail} type="email" className="form-control" id="input-email" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-password" className="form-label">Password</label>
          <input ref={inputPassword} type="password" className="form-control" id="input-password" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-confirm_password" className="form-label">Confirm_Password</label>
          <input ref={inputConfirm_Password} type="confirm_password" className="form-control" id="input-confirm_password" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-phone" className="form-label">No Telepon</label>
          <input ref={inputPhone} type="tel" className="form-control" id="input-phone" />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleRegister}>Register</button>
      </form>
      {/* Bootstrap Modal */}
      <Modal show={registrationSuccess} onHide={() => setRegistrationSuccess(false)}> {/* Show modal if registrationSuccess is true */}
        <Modal.Header closeButton>
          <Modal.Title>Registrasi Berhasil!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda telah berhasil terdaftar.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setRegistrationSuccess(false)}>Tutup</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}