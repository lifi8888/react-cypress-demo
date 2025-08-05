import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light" id="login-page">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }} id="login-card">
        <h1 className="text-center text-primary mb-4" style={{ fontSize: '32px' }} id="login-title">Bejelentkezés</h1>
        <form id="login-form">
          <div className="mb-3"><input type="email" className="form-control" name="email" placeholder="Email cím" required id="login-email"/></div>
          <div className="mb-3"><input type="password" className="form-control" name="password" placeholder="Jelszó" required id="login-password"/></div>
          <button type="submit" className="btn btn-primary w-100" id="login-submit">Bejelentkezés</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;