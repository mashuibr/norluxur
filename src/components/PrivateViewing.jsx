import { useState } from 'react';
import './PrivateViewing.css';

const PrivateViewing = ({ showNotification }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showNotification('Your appointment request has been submitted. We will contact you shortly.', 'success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      date: '',
      message: ''
    });
  };

  return (
    <section id="appointments" className="appointments-section">
      <div className="section-container">
        <div className="appointments-content">
          <div className="appointments-info">
            <span className="section-label">By Invitation</span>
            <h2 className="section-title">Private Viewing</h2>
            <p className="appointments-description">
              Experience our collection in an intimate setting. Our private viewing sessions 
              offer a bespoke journey through our latest creations, accompanied by champagne 
              and personalized styling consultation.
            </p>
            <ul className="appointments-features">
              <li>One-on-one consultation with our style directors</li>
              <li>First access to unreleased pieces</li>
              <li>Complimentary alterations and lifetime care</li>
              <li>Exclusive member pricing</li>
            </ul>
          </div>
          <div className="appointments-form-container">
            <form onSubmit={handleSubmit} className="appointment-form">
              <h3>Request an Appointment</h3>
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label htmlFor="phone">Phone Number</label>
              </div>
              <div className="form-group">
                <select 
                  id="location" 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled></option>
                  <option value="paris">Paris Flagship</option>
                  <option value="london">London Mayfair</option>
                  <option value="newyork">New York Madison</option>
                  <option value="tokyo">Tokyo Ginza</option>
                  <option value="virtual">Virtual Consultation</option>
                </select>
                <label htmlFor="location">Preferred Location</label>
              </div>
              <div className="form-group">
                <input 
                  type="date" 
                  id="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="date">Preferred Date</label>
              </div>
              <div className="form-group">
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message">Special Requests</label>
              </div>
              <button type="submit" className="btn-primary">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateViewing;
