import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import HomePage from './HomePage';
import SignIn from './SignIn';
import EnterPassword from './EnterPassword';
import LandingPage from './LandingPage';
import './App.css'; // Make sure App.css is imported

function App() {
  // In a real app, you might manage the email state higher up or in a global store
  // For this example, we'll pass it via route state.
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/enter-password" element={<EnterPassword />} />
          {/* You can add more routes here, e.g., for signup, dashboard */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;