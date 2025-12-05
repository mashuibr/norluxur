import { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-logo">NORLUXUR</div>
        <div className="preloader-line-container">
          <div className="preloader-line" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="preloader-text">Entering the Atelier</div>
      </div>
    </div>
  );
};

export default Preloader;
