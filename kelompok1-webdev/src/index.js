import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/login';
import Register from './components/regis';

function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterClicked(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <App />
      ) : isRegisterClicked ? (
        <Register /> 
      ) : (
        <Login onLogin={handleLogin} onRegisterClick={handleRegisterClick} /> 
      )}
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));