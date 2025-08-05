import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Állapot az aktuális egyenleg kulcsához (1, 2, 3)
  const [balanceKey, setBalanceKey] = React.useState<1 | 2 | 3>(1);

  // Egyenleg formázása
  const formattedBalance =
    typeof user?.balance?.[balanceKey] === 'number'
      ? user.balance[balanceKey].toLocaleString('hu-HU')
      : '';

  // Egyenleg kulcsok listája
  const balanceKeys = user?.balance ? Object.keys(user.balance).map(Number) : [1];

  // Egyenleg váltása gombnyomásra
  const handleBalanceSwitch = () => {
    if (!balanceKeys.length) return;
    const currentIdx = balanceKeys.indexOf(balanceKey);
    const nextIdx = (currentIdx + 1) % balanceKeys.length;
    setBalanceKey(balanceKeys[nextIdx] as 1 | 2 | 3);
  };

  return (
    <div id="dashboard-page" className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div id="dashboard-card" className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <div id="welcome-message" className="text-center mb-3">
          Üdvözlünk, {user?.name}!
        </div>
        <h1 id="dashboard-title" className="text-center text-success mb-4" style={{ fontSize: '32px' }}>Egyenleg</h1>
        <div id="balance-value" className="text-center fs-4 fw-bold mb-4">{formattedBalance} Ft
          <button id="balance-switch-button" className="btn btn-sm btn-link ms-2 p-0 align-baseline" type="button" onClick={handleBalanceSwitch} title="Egyenleg váltása" style={{ verticalAlign: 'baseline' }}>
            🔄
          </button>
        </div>
        <button id="logout-button" className="btn btn-outline-secondary w-100" type="button" onClick={handleLogout}>Kijelentkezés</button>
      </div>
    </div>
  );
};

export default DashboardPage;
