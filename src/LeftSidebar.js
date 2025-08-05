import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import './LeftSidebar.css'; // Shared stylesheet
import { Home ,User,Menu} from "lucide-react";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar-x">
      <div className="left-sidebar-x-top">
        <div className="left-sidebar-x-logo">Xpress</div> {/* X logo */}
        <nav className="left-sidebar-x-nav">
          <Link to="/home" className="left-sidebar-x-nav-item active">
            <span className="icon"><Home className="w-6 h-6 text-blue-500" /></span> Home
          </Link>
          <Link to="/profile" className="left-sidebar-x-nav-item">
            <span className="icon"><User className="w-6 h-6 text-blue-500" /></span> Profile
          </Link>
          
          <Link to="/more" className="left-sidebar-x-nav-item">
            <span className="icon"><Menu className="w-6 h-6 text-blue-500" /></span> More
          </Link>
        </nav>
        <Link to="/create-post" className="left-sidebar-x-post-button">Post</Link>

      </div>

      
    </div>
  );
};

export default LeftSidebar;