import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Itt jöhet később a session törlés / auth reset
    navigate('/login');
  };

  return (
    <div id="dashboard-page" className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div id="dashboard-card" className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h1 id="dashboard-title" className="text-center text-success mb-4" style={{ fontSize: '32px' }}>Egyenleg</h1>
        <div id="balance-value" className="text-center fs-4 fw-bold mb-4">1 250 000 Ft</div>
        <button id="logout-button" className="btn btn-outline-secondary w-100" type="button" onClick={handleLogout}>Kijelentkezés</button>
      </div>
    </div>
  );
};

export default DashboardPage;
