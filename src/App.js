import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import HomePage from './HomePage';
import SignIn from './SignIn';
import Signup from './Signup';
import EnterPassword from './EnterPassword';
import LandingPage from './LandingPage';
import CreatePost from './CreatePost';
import './App.css'; // Make sure App.css is imported

function App() {
  // In a real app, you might manage the email state higher up or in a global store
  // For this example, we'll pass it via route state.
  return (
    <Router basename="/xpress.github.io">
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-post" element={<CreatePost />} />
          {/* Assuming EnterPassword is a component for entering the password after email/username */}
          <Route path="/enter-password" element={<EnterPassword />} />
          {/* You can add more routes here, e.g., for signup, dashboard */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;