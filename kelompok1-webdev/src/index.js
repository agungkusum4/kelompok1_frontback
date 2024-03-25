import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/login';
import Register from './components/regis';

function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false); // Tambahkan state untuk menandai bahwa tombol register telah diklik

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterClicked(true); // Atur state untuk menunjukkan bahwa tombol register telah diklik
  };

  return (
    <div>
      {isLoggedIn ? (
        <App />
      ) : isRegisterClicked ? (
        <Register /> // Tampilkan komponen Register jika tombol register telah diklik
      ) : (
        <Login onLogin={handleLogin} onRegisterClick={handleRegisterClick} /> // Tambahkan prop onRegisterClick yang akan dipanggil saat tombol register diklik
      )}
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));