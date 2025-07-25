import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import './LeftSidebar.css'; // Shared stylesheet
import { Home, Search, Bell, MessageCircle ,User,Users,Menu} from "lucide-react";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar-x">
      <div className="left-sidebar-x-top">
        <div className="left-sidebar-x-logo">Xpress</div> {/* X logo */}
        <nav className="left-sidebar-x-nav">
          <Link to="/home" className="left-sidebar-x-nav-item active">
            <span className="icon"><Home className="w-6 h-6 text-blue-500" /></span> Home
          </Link>
          <Link to="/explore" className="left-sidebar-x-nav-item">
            <span className="icon"><Search className="w-6 h-6 text-blue-500" /></span> Explore
          </Link>
          <Link to="/notifications" className="left-sidebar-x-nav-item">
            <span className="icon"><Bell className="w-6 h-6 text-blue-500" /></span> Notifications
          </Link>
          <Link to="/messages" className="left-sidebar-x-nav-item">
            <span className="icon"><MessageCircle className="w-6 h-6 text-blue-500" /></span> Messages
          </Link>
          <Link to="/communities" className="left-sidebar-x-nav-item">
            <span className="icon"><Users className="w-6 h-6 text-blue-500" /></span> Communities
          </Link>
          <Link to="/profile" className="left-sidebar-x-nav-item">
            <span className="icon"><User className="w-6 h-6 text-blue-500" /></span> Profile
          </Link>
          <Link to="/more" className="left-sidebar-x-nav-item">
            <span className="icon"><Menu className="w-6 h-6 text-blue-500" /></span> More
          </Link>
        </nav>
        <button className="left-sidebar-x-post-button">Post</button>
      </div>

      <div className="left-sidebar-x-user-profile">
        {/* User profile details */}
        <div className="user-avatar"></div> {/* Placeholder for avatar */}
        <div className="user-info">
          <div className="user-name">name</div>
          <div className="user-handle">@username</div>
        </div>
        <span className="user-options">...</span> {/* More options icon */}
      </div>
    </div>
  );
};

export default LeftSidebar;