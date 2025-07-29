import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file

const SignInX = () => {
  const [identifier, setIdentifier] = useState('');
  const [showWarning, setShowWarning] = useState(false); 
  const navigate = useNavigate();

  

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