import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use react-router for "Sign in"
import './LandingPage.css'; // Make sure this path is correct

// You might want to import the X logo as an SVG or PNG
// import XLogo from './path/to/XLogo.svg';

const LandingPage = () => {
  

  // This component renders the landing page with a large X logo and sign-in options
  // You can replace the placeholder logo with an actual image or SVG component

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
          <Link to="/signup" className="landing-page-x-signin-button" >Create account</Link>
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