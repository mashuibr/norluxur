import './Hero.css';

const Hero = () => {
  const scrollToUpcoming = () => {
    document.getElementById('upcoming')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920" 
          alt="Luxury fashion"
          className="hero-image"
        />
      </div>
      <div className="hero-content">
        <div className="hero-subtitle">Autumn/Winter 2025</div>
        <h1 className="hero-title">
          <span className="title-line">The Art of</span>
          <span className="title-line">Timeless Elegance</span>
        </h1>
        <div className="hero-cta">
          <button onClick={scrollToUpcoming} className="btn-primary">
            Discover the Collection
          </button>
        </div>
        <div className="hero-scroll">
          <span>Scroll to Explore</span>
          <div className="scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
