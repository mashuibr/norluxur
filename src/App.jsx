import { useState, useEffect } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AnnouncementBanner from './components/AnnouncementBanner';
import Philosophy from './components/Philosophy';
import UpcomingReleases from './components/UpcomingReleases';
import LiveAuctions from './components/LiveAuctions';
import Archive from './components/Archive';
import Atelier from './components/Atelier';
import PrivateViewing from './components/PrivateViewing';
import Membership from './components/Membership';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import BidModal from './components/BidModal';
import Notification from './components/Notification';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <>
      {loading && <Preloader />}
      <CustomCursor />
      <Navigation />
      <Hero />
      <AnnouncementBanner />
      <Philosophy />
      <UpcomingReleases onProductSelect={setSelectedProduct} />
      <LiveAuctions onAuctionSelect={setSelectedAuction} />
      <Archive />
      <Atelier />
      <PrivateViewing showNotification={showNotification} />
      <Membership showNotification={showNotification} />
      <Footer />
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          showNotification={showNotification}
        />
      )}
      
      {selectedAuction && (
        <BidModal 
          auction={selectedAuction} 
          onClose={() => setSelectedAuction(null)}
          showNotification={showNotification}
        />
      )}
      
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type}
        />
      )}
    </>
  );
}

export default App;
