import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './App.css'; // Make sure this path is correct
import { Eye,EyeOff,X} from 'lucide-react';

const EnterPassword = ({ placeholder = "Enter your password" }) => {
  const location = useLocation();
  const email = location.state?.email || 'email-not-provided@example.com'; // Get email from route state, provide fallback
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
  
  const handleLogin = () => {
    console.log('Log in clicked. Email:', email, 'Password:');
    // Implement your actual login logic here
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Implement forgot password logic
  };

  

  return (
    <div className="signin-x-overlay">
      <div className="signin-x-container">
        <button className="signin-x-close-button"><X className="w-6 h-6 text-blue-600" /></button>
        <div className="signin-x-logo">Xpress</div>
        <h2 className="signin-x-title">Enter your password</h2>
        <div className="signin-x-input-group">
          <label htmlFor="email-field" className="signin-x-input-label">Email</label>
          <input
            id="email-field"
            type="text"
            className="signin-x-input-field signin-x-input-field--read-only"
            value={email}
            readOnly
            tabIndex="-1"
          />
        </div>

        <div className="signin-x-input-group">
          <label htmlFor="password-field" className="signin-x-input-label">Password</label>
          <div className="signin-x-password-input-wrapper">
            <input
              id="password-field"
              type= {showPassword ? 'text' : 'password'}
              className="signin-x-input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <span className="input-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </span>
          </div>
        </div>

        <div className="signin-x-forgot-text" onClick={handleForgotPassword}>
           <a href="#" className="signin-x-signup-link">Forgot password?</a>
        </div>

        <Link to='/home' className="signin-x-next" onClick={handleLogin}> Log in </Link>

        <div className="signin-x-signup-text">
          Don't have an account? <a href="#" className="signin-x-signup-link">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default EnterPassword;