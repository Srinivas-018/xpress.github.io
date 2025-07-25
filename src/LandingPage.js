import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use react-router for "Sign in"
import './LandingPage.css'; // Make sure this path is correct

// You might want to import the X logo as an SVG or PNG
// import XLogo from './path/to/XLogo.svg';

const LandingPage = () => {
  const handleSignUpWithGoogle = () => {
    console.log('Sign up with Google clicked');
    // Implement Google sign-up/onboarding logic
  };

  const handleSignUpWithApple = () => {
    console.log('Sign up with Apple clicked');
    // Implement Apple sign-up/onboarding logic
  };

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
          <button className="landing-page-x-social-signup-button" onClick={handleSignUpWithGoogle}>
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="landing-page-x-social-icon"
            />
            Sign up with Google
          </button>

          <button className="landing-page-x-social-signup-button" onClick={handleSignUpWithApple}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="landing-page-x-social-icon"
            />
            Sign up with Apple
          </button>

          <div className="landing-page-x-or-divider">
            <span className="landing-page-x-or-text">or</span>
          </div>

          <button className="landing-page-x-create-account-button" onClick={handleCreateAccount}>
            Create account
          </button>

          <p className="landing-page-x-terms-text">
            By signing up, you agree to the <a href="#" className="landing-page-x-link">Terms of Service</a> and <a href="#" className="landing-page-x-link">Privacy Policy</a>, including <a href="#" className="landing-page-x-link">Cookie Use</a>.
          </p>
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