import './Membership.css';

const Membership = ({ showNotification }) => {
  const handleApply = (tier) => {
    showNotification(`Application for ${tier} membership initiated. We'll be in touch soon.`, 'success');
  };

  return (
    <section id="membership" className="membership-section">
      <div className="section-container">
        <div className="membership-content">
          <span className="section-label">The Inner Circle</span>
          <h2 className="section-title">Become a Patron</h2>
          <p className="membership-description">
            Join an exclusive community of collectors and connoisseurs. 
            Patrons receive privileged access to our most coveted releases and private events.
          </p>
          <div className="membership-tiers">
            <div className="tier-card" data-tier="silver">
              <div className="tier-header">
                <h3>Silver</h3>
                <span className="tier-tagline">The Initiate</span>
              </div>
              <ul className="tier-benefits">
                <li>Early access to releases (24h before public)</li>
                <li>Quarterly lookbook delivered</li>
                <li>Invitation to seasonal presentations</li>
                <li>Priority customer service</li>
              </ul>
              <button className="btn-tertiary" onClick={() => handleApply('Silver')}>
                Apply Now
              </button>
            </div>
            <div className="tier-card featured" data-tier="gold">
              <div className="tier-badge">Most Popular</div>
              <div className="tier-header">
                <h3>Gold</h3>
                <span className="tier-tagline">The Collector</span>
              </div>
              <ul className="tier-benefits">
                <li>All Silver benefits</li>
                <li>48-hour early access to releases</li>
                <li>Complimentary alterations worldwide</li>
                <li>Annual atelier visit</li>
                <li>Private sale access</li>
              </ul>
              <button className="btn-primary" onClick={() => handleApply('Gold')}>
                Apply Now
              </button>
            </div>
            <div className="tier-card" data-tier="platinum">
              <div className="tier-header">
                <h3>Platinum</h3>
                <span className="tier-tagline">The Connoisseur</span>
              </div>
              <ul className="tier-benefits">
                <li>All Gold benefits</li>
                <li>72-hour early access to releases</li>
                <li>Bespoke creation opportunities</li>
                <li>Personal style director</li>
                <li>VIP event invitations globally</li>
                <li>Lifetime garment care</li>
              </ul>
              <button className="btn-tertiary" onClick={() => handleApply('Platinum')}>
                By Invitation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
