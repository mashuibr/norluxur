import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="main-nav">
        <div className="nav-left">
          <button onClick={() => scrollToSection('upcoming')} className="nav-link">Collections</button>
          <button onClick={() => scrollToSection('auctions')} className="nav-link">Auctions</button>
        </div>
        <div className="nav-logo">
          <button onClick={() => scrollToSection('hero')}>NORLUXUR</button>
        </div>
        <div className="nav-right">
          <button onClick={() => scrollToSection('atelier')} className="nav-link">Atelier</button>
          <button onClick={() => scrollToSection('appointments')} className="nav-link">Private Viewing</button>
        </div>
      </nav>

      <button 
        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('upcoming')}>Collections</button>
          <button onClick={() => scrollToSection('auctions')}>Auctions</button>
          <button onClick={() => scrollToSection('atelier')}>Atelier</button>
          <button onClick={() => scrollToSection('appointments')}>Private Viewing</button>
          <button onClick={() => scrollToSection('membership')}>Membership</button>
        </div>
      )}
    </>
  );
};

export default Navigation;
