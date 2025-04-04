import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <div className="logo">FIR3</div>
        <div className="nav-buttons">
          <button onClick={() => navigate('/file-complaint')}>Create Complaint</button>
          <button>Track Complaint</button>
          <button className="wallet-button">0x7813...</button>
        </div>
      </header>

      <main>
        <div className="main-content">
          <div className="content-left">
            <h1 className="title">File and Track Your Complaints Securely</h1>
            <p className="description">
              Our decentralized platform provides a secure and transparent way for
              citizens to register complaints and track their progress. With our system,
              you can be confident that your information is protected and the process
              is fair.
            </p>
            <button className="file-button" onClick={() => navigate('/file-complaint')}>
              File a Complaint
            </button>
          </div>
          <div className="content-right">
            {/* Circular navigation UI placeholder */}
          </div>
        </div>

        <div className="features-section">
          <span className="features-tag">Features</span>
          <p className="features-description">
            Our police complaint management system offers a range of features to ensure
            efficient and secure handling of public complaints. These include:
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance for all your complaint-related queries</p>
            </div>
            <div className="feature-card">
              <h3>Mobile Access</h3>
              <p>File and track complaints from anywhere using our mobile platform</p>
            </div>
            <div className="feature-card">
              <h3>Secure System</h3>
              <p>Advanced encryption and blockchain technology to protect your data</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;