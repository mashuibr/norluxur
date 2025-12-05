import './Atelier.css';

const Atelier = () => {
  return (
    <section id="atelier" className="atelier-section">
      <div className="atelier-background">
        <img 
          src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920" 
          alt="The Atelier" 
          loading="lazy"
        />
      </div>
      <div className="atelier-content">
        <span className="section-label">Behind the Scenes</span>
        <h2 className="section-title">The Atelier</h2>
        <p className="atelier-description">
          Our Parisian atelier houses master craftsmen whose techniques have been passed down 
          through generations. Every stitch tells a story, every fabric is sourced with intention.
        </p>
        <button className="btn-secondary">Schedule a Virtual Tour</button>
      </div>
    </section>
  );
};

export default Atelier;
