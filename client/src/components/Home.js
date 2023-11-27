import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../App';

const Home = () => {
  const { isAuthenticated, username } = useAuth();

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
  };

  const cardStyle = {
    width: '200px',
    height: '300px',
    margin: '10px',
    perspective: '1000px',
  };

  const cardInnerStyle = {
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.5s',
    transform: 'rotateY(0deg)',
    cursor: 'pointer',
  };

  const cardFrontStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const cardBackStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#f1f1f1',
    padding: '10px',
    textAlign: 'center',
  };
  const navbarStyle = {
    backgroundColor: '#333',
    padding: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const searchInputStyle = {
    marginRight: '10px',
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
  };

  const searchButtonStyle = {
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#555',
    color: 'white',
    cursor: 'pointer',
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  return (
    <div>
       <div style={navbarStyle}>
        <div style={searchContainerStyle}>
          {/* Logo */}
          <img src="logo.png" alt="Logo" style={logoStyle} />
          {/* Title */}
          <h2 style={{ margin: '0' }}>Pawfect Companions</h2>
        </div>
        
        {/* Search Bar */}
        <div style={searchContainerStyle}>
          <input type="text" placeholder="Search" style={searchInputStyle} />
          <button style={searchButtonStyle}>Search</button>
        </div>
      
        <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
        <Link to="/login" style={{ color: 'white', marginRight: '20px' }}>Login</Link>
        <Link to="/register" style={{ color: 'white' }}>Register</Link>
      </div>
      <header>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Welcome to Pawfect Companions</h1>
        {isAuthenticated ? (
        <>
          <p>You are logged in as {username}.</p>
          <Link to="/home-logged">Go to Logged-in Home</Link>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
      </header>
      <div className="card-container" style={cardContainerStyle}>
        {/* Dog Card */}
        <div className="card" style={cardStyle}>
        <div className="card-inner" style={cardInnerStyle}>
          <Link to="/dogs" className="card-front" style={{ ...cardFrontStyle, backgroundColor: '#87CEEB' }}>
            {/* Add your dog image */}
            <p style={{ textAlign: 'center', marginTop: '10px', color: 'white' }}>Dog</p>
          </Link>
          <div className="card-back" style={cardBackStyle}>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>Friendly and playful</p>
          </div>
        </div>
      </div>

        {/* Cat Card */}
        <div className="card" style={cardStyle}>
        <div className="card-inner" style={cardInnerStyle}>
          <Link to="/cats" className="card-front" style={{ ...cardFrontStyle, backgroundColor: '#FFD700' }}>
            {/* Add your cat image */}
            <p style={{ textAlign: 'center', marginTop: '10px', color: 'white' }}>Cat</p>
          </Link>
          <div className="card-back" style={cardBackStyle}>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>Independent and cuddly</p>
          </div>
        </div>
      </div>

        {/* Other Pets Card */}
        <div className="card" style={cardStyle}>
        <div className="card-inner" style={cardInnerStyle}>
          <Link to="/others" className="card-front" style={{ ...cardFrontStyle, backgroundColor: '#FFD700' }}>
            {/* Add your cat image */}
            <p style={{ textAlign: 'center', marginTop: '10px', color: 'white' }}>Other Pets</p>
          </Link>
          <div className="card-back" style={cardBackStyle}>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>Independent and cuddly</p>
          </div>
        </div>
      </div>
      </div>
      <footer style={{ marginTop: '20px' }}>
        <div className="contact-info" style={{ textAlign: 'center' }}>
          <p>Contact us: +1 (123) 456-7890</p>
          <p>Email: info@pawfectcompanions.com</p>
        </div>
        <div className="copyright" style={{ textAlign: 'center' }}>
          <p>&copy; 2023 Pawfect Companions. All rights reserved. <img src="copyright-logo.png" alt="Copyright Logo" /></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
