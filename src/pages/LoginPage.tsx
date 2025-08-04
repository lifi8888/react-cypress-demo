import React from 'react';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.loginContainer} data-cy="login-container">
      <div className={styles.loginBox} data-cy="login-box">
        <h1 data-cy="login-title" className={styles.title}>Bejelentkezés</h1>
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