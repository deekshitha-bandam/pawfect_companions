import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import { useAuth } from '../App';
const Home = () => {
  const { isAuthenticated, username } = useAuth();
  const [isFlipped, setIsFlipped] = useState(false);

  const navbarStyle = {
    position: 'sticky', // Make the navbar sticky
    top: '0',
    backgroundColor: '#4668b0',
    padding: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    zIndex: '1', // Ensure navbar is above background
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

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
  };

  const cardStyle = {
    width: '250px',
    height: '350px',
    margin: '20px',
    perspective: '1000px',
    fontFamily: 'Arial, sans-serif',
    cursor: 'pointer', // Add cursor pointer to indicate clickability
  };

  const cardInnerStyle = {
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.5s',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  };

  const cardFrontStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem', // Adjust the font size as needed
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem', // Adjust the font size as needed
  };

  const footerStyle = {
    backgroundColor: '#4a4f46',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    // position: 'fixed',
    bottom: '0',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  };

  // const resourcesContainerStyle = {
  //   marginTop: '20px',
  //   padding: '20px',
  //   backgroundColor: '#f9f9f9',
  // };

  const successStoriesContainerStyle = {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#a8e673',
    minHeight: '40px', // Minimum height for the content area before the footer appears
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  
  const successStoriesContentStyle = {
    
    flex: 1,
    textAlign: 'center',
  };
  
  const successStoriesImagesStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  };
  
  const successStoriesImageStyle = {
    width: '30%',
    borderRadius: '8px',
  };

  const medicalResourcesContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#e68181',
  };
  
  const medicalResourcesTextStyle = {
    flex: '1',
    marginRight: '20px',
  };
  
  
  const medicalResourcesTitleStyle = {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '10px',
  };
  
  
  const medicalResourcesImageStyle = {
    marginLeft: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const backgroundStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1', // Set background behind content
    backgroundImage: 'url(background.jpeg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <div style={backgroundStyle}></div>
      <div style={navbarStyle}>
        <div style={searchContainerStyle}>
          <img src="logo.png" alt="Logo" style={logoStyle} />
          <h2 style={{ margin: '0' }}>Pawfect Companions</h2>
        </div>

        <div style={searchContainerStyle}>
          <input type="text" placeholder="Search" style={searchInputStyle} />
          <button style={searchButtonStyle}>Search</button>
        </div>

        <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
        <Link to="/Login" style={{ color: 'white', marginRight: '20px' }}>Login</Link>
        <Link to="/Register" style={{ color: 'white' }}>SignUp</Link>
      </div>

      <header>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Welcome to Pawfect Companions</h1>
        {isAuthenticated ? (
          <>
            <p>You are logged in as {username}.</p>
            <Link to="/homelog">Go to Logged-in Home</Link>
          </>
        ) : (
          <p>You are not logged in.</p>
        )}
      </header>

      <Container className="card-container" style={cardContainerStyle}>
    
<Card className="card" style={cardStyle} onClick={() => handleCardClick()}>
  <div className="card-inner" style={cardInnerStyle}>
    <div className="card-front" style={{ ...cardFrontStyle, backgroundColor: '#f7f6c1' }}>
      <Link to="/dogs" style={{ color: 'white', textDecoration: 'underline' }}>
        <img src="dogcard.jpeg" alt="Dog" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
      </Link>
    </div>
    <div className="card-back" style={cardBackStyle}>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>Friendly and playful</p>
    </div>
  </div>
</Card>


<Card className="card" style={cardStyle} onClick={() => handleCardClick()}>
  <div className="card-inner" style={cardInnerStyle}>
    <div className="card-front" style={{ ...cardFrontStyle, backgroundColor: '#f7f6c1' }}>
      <Link to="/cats" style={{ color: 'white', textDecoration: 'underline' }}>
        <img src="catcard.jpeg" alt="Cat" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
      </Link>
    </div>
    <div className="card-back" style={cardBackStyle}>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>Independent and cuddly</p>
    </div>
  </div>
</Card>


<Card className="card" style={cardStyle} onClick={() => handleCardClick()}>
  <div className="card-inner" style={cardInnerStyle}>
    <div className="card-front" style={{ ...cardFrontStyle, backgroundColor: '#f7f6c1' }}>
    <Link to="/others" style={{ color: 'white', textDecoration: 'underline' }}>
        <img src="othercard.jpeg" alt="Other Pets" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
      </Link>
    </div>
    <div className="card-back" style={cardBackStyle}>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>Unique and Friendly</p>
    </div>
  </div>
</Card>

      </Container>
       {/* Medical Resources Container */}
  
<Container style={medicalResourcesContentStyle}>
  <div style={medicalResourcesTextStyle}>
    <div style={medicalResourcesTitleStyle}>Medical Resources</div>
    <div style={medicalResourcesTextStyle}>
      <p>
        We provide a variety of medical resources to help you take care of your pet companions. Whether it's information
        on vaccinations, nutrition, or general health tips, we've got you covered.
      </p>
    </div>
  </div>
  <div style={medicalResourcesImageStyle}>
    {/* Add your medical resources images here */}
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzC1QYZCWIB9h4JALdr5Vv9pNr59Kf-U_cIw&usqp=CAU" alt="Medical Resources" style={{ width: '100%' }} />
  </div>
</Container>;

      {/* Success Stories Container */}
      <Container style={successStoriesContainerStyle}>
  <div style={successStoriesContentStyle}>
    <h2>Success Stories</h2>
    <p>
      Read about the heartwarming stories of pet adoptions and the happy families that found their Pawfect Companions
      through our platform. Your next furry friend might be waiting for you!
    </p>
  </div>
  <div style={successStoriesImagesStyle}>
    {/* Add your success stories images here */}
    <img src="success-story1.jpeg" alt="Success Story 1" style={successStoriesImageStyle} />
    <img src="success-story2.jpeg" alt="Success Story 2" style={successStoriesImageStyle} />
    <img src="success-story3.jpeg" alt="Success Story 3" style={successStoriesImageStyle} />
  </div>
</Container>;

      <footer style={footerStyle}>
        <div>
          <p>Contact us: +1 (123) 456-7890</p>
          <p>Email: info@pawfectcompanions.com</p>
        </div>
        <div>
          <p>&copy; 2023 Pawfect Companions. All rights reserved.</p>
          <img src="copyright-logo.png" alt="Copyright Logo" />
        </div>
      </footer>
    </div>
  );
};
export default Home;
