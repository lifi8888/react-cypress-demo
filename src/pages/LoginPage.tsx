import React from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  return (
    <div id="login-container">
      <div id="login-box">
        <h1>Bejelentkezés</h1>
        <form>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Jelszó" />
          <button type="submit">Bejelentkezés</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;