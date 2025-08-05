import React from 'react'
import './CentralFeed.css' // Shared stylesheet
import { Search } from 'lucide-react' // Importing search icon

function RightSidebar() {
  return (
    <div className="right-sidebar-x">
      <div className="search-bar-right">
        <Search className="w-6 h-6 text-blue-600" /> <input type="text" placeholder="Search" />
      </div>

      <div className="section subscribe-premium-section">
        <h3>Subscribe to Premium</h3>
        <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
        <button className="subscribe-button">Subscribe</button>
      </div>

      <div className="section who-to-follow-section">
        <h3>Who to follow</h3>
        {/* Placeholder for follow suggestions */}
        <div className="follow-suggestion">
          <div className="user-avatar">
            <img 
            src="https://i.pravatar.cc/" 
            alt="User Avatar" 
            className="create-post-avatar" 
          />
          </div>
          <div className="user-info">
            <div className="user-name">User Name</div>
            <div className="user-handle">@username</div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
        
      </div>

      <div className="footer-links">
        <span>© 2025 Xpress.</span>
      </div>
    </div>
  )
}

export default RightSidebar
