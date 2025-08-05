import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="text-danger display-4">404 - Az oldal nem található</h1>
        <p className="lead">Ellenőrizze a címet vagy térjen vissza a főoldalra.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
