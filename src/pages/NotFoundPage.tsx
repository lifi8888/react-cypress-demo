import React from 'react';
import styles from './NotFoundPage.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.notfoundContainer} data-cy="notfound-container">
      <h1 className={styles.title} data-cy="notfound-title">
        Az oldal nem található.
      </h1>
    </div>
  );
};

export default NotFoundPage;