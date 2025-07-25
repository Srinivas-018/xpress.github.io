import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file

const SignInX = () => {
  const [identifier, setIdentifier] = useState('');
  const [showWarning, setShowWarning] = useState(false); 
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    console.log('Sign in with Google clicked');
    // Implement Google sign-in logic here
  };

  const handleSignInWithApple = () => {
    console.log('Sign in with Apple clicked');
    // Implement Apple sign-in logic here
  };

  const handleNext = () => {
    if (identifier.trim()) { // Check if identifier is not empty or just whitespace
      setShowWarning(false); // Hide warning if valid input
      console.log('Next clicked. Identifier:', identifier);
      // Navigate to the password entry screen, passing the identifier (email/username) as state
      navigate('/enter-password', { state: { email: identifier } });
    } else {
      setShowWarning(true); // Show warning if identifier is empty
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Implement forgot password logic
  };

  return (
    <div className="signin-x-overlay">
      <div className="signin-x-container">
        <button className="signin-x-close-button">x</button> {/* Close button */}
        <div className="signin-x-logo">Xpress</div> {/* X logo */}
        <h2 className="signin-x-title">Sign in to Xpress</h2>

        <button className="signin-x-social-button" onClick={handleSignInWithGoogle}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png" 
            alt="Google"
            className="signin-x-social-icon"
          />
          Sign in with Google
        </button>

        <button className="signin-x-social-button" onClick={handleSignInWithApple}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
            alt="Apple"
            className="signin-x-social-icon"
          />
          Sign in with Apple
        </button>

        <div className="signin-x-or-divider">
          <span className="signin-x-or-text">or</span>
        </div>

        <input
          type="email"
          placeholder="Email"
          className="signin-x-input-field"
          value={identifier}
          onChange={(e) => {setIdentifier(e.target.value);
            if (showWarning && e.target.value.trim()) {
              setShowWarning(false); // Hide warning as user starts typing
            }
        }}
        />

        <button className="signin-x-next-button" onClick={handleNext}>
          Next
        </button>

        <button className="signin-x-forgot-password-button" onClick={handleForgotPassword}>
          Forgot password?
        </button>

        <div className="signin-x-signup-text">
          Don't have an account? <a href="#" className="signin-x-signup-link">Sign up</a>
        </div>
        {/* Warning Modal/Message */}
        {showWarning && (
          <div className="signin-x-warning-modal">
            Sorry, please enter your email or username.
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInX;