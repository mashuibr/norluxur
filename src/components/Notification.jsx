import { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, type = 'success' }) => {
  return (
    <div className={`notification-toast ${type}`}>
      <div className="toast-content">
        <span className="toast-icon">
          {type === 'success' ? '✓' : '!'}
        </span>
        <span className="toast-message">{message}</span>
      </div>
    </div>
  );
};

export default Notification;
