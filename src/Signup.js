import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'; // Import the CSS file

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!name.trim()) {
      setWarningMessage('Please enter your name.');
      setShowWarning(true);
      return;
    }
    if (!email.trim()) {
        setWarningMessage('Please enter your email.');
        setShowWarning(true);
        return;
    }
    if (password.length < 8) {
        setWarningMessage('Password must be at least 8 characters long.');
        setShowWarning(true);
        return;
    }

    setShowWarning(false);
    console.log('Signing up with:', { name, email, password });
    // Here you would typically make an API call to your backend to register the user
    // After successful signup, you might navigate to the sign-in page or a dashboard
    navigate('/signin');
  };

  return (
    <div className="signup-x-overlay">
      <div className="signup-x-container">
        <button className="signup-x-close-button" onClick={() => navigate('/signin')}>x</button>
        <div className="signup-x-logo">Xpress</div>
        <h2 className="signup-x-title">Create your account</h2>

        <input
          type="text"
          placeholder="Name"
          className="signup-x-input-field"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (showWarning) setShowWarning(false);
          }}
        />

        <input
          type="email"
          placeholder="Email"
          className="signup-x-input-field"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (showWarning) setShowWarning(false);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          className="signup-x-input-field"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (showWarning) setShowWarning(false);
          }}
        />

        <button className="signup-x-submit-button" onClick={handleSignUp}>
          Sign up
        </button>

        <div className="signup-x-login-text">
          Have an account already? <Link to="/signin" className="signup-x-login-link">Log in</Link>
        </div>

        {showWarning && (
          <div className="signup-x-warning-modal">
            {warningMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
