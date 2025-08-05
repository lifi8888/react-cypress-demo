import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.email as HTMLInputElement).value;
    const password = (e.currentTarget.password as HTMLInputElement).value;

    const success = login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Hibás bejelentkezési adatok');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light" id="login-page">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }} id="login-card">
        <h1 className="text-center text-primary mb-4" style={{ fontSize: '32px' }} id="login-title">Bejelentkezés</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="email" className="form-control" name="email" placeholder="Email cím" required id="login-email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" name="password" placeholder="Jelszó" required id="login-password" />
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100" id="login-submit">Bejelentkezés</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
