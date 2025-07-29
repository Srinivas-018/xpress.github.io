import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use react-router for "Sign in"
import './LandingPage.css'; // Make sure this path is correct

// You might want to import the X logo as an SVG or PNG
// import XLogo from './path/to/XLogo.svg';

const LandingPage = () => {
  

  const handleCreateAccount = () => {
    console.log('Create account clicked');
    // Implement logic to navigate to a full sign-up form
  };

  return (
    <div className="landing-page-x-container">
      <div className="landing-page-x-left">
        {/* Replace with your actual X logo image */}
        <div className="landing-page-x-large-logo">X</div>
      </div>
      <div className="landing-page-x-right">
        <h1 className="landing-page-x-heading">Happening now</h1>
        <h2 className="landing-page-x-subheading">Join today.</h2>

        <div className="landing-page-x-signup-options">
          <div className="landing-page-x-or-divider">
            <span className="landing-page-x-or-text">or</span>
          </div>

          <button className="landing-page-x-create-account-button" onClick={handleCreateAccount}>
            Create account
          </button>
        </div>

        <div className="landing-page-x-signin-section">
          <h3>Already have an account?</h3>
          {/* Using React Router Link for navigation */}
          <Link to="/signin" className="landing-page-x-signin-button">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;