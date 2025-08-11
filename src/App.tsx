import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';

const getBaseName = () => {
  const path = window.location.pathname;
  // Ha /react-cypress-demo-vel kezdődik, állítsuk be basename-nek
  if (path.startsWith('/react-cypress-demo')) {
    return '/react-cypress-demo';
  }
  return '';
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router basename={getBaseName()}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
