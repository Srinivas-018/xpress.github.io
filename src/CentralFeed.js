import React from 'react';
import {Link} from 'react-router-dom';
import './CentralFeed.css'; // Shared stylesheet
import { Image,Film, BarChart3,Smile, Calendar} from 'lucide-react'; // Import icons from lucide-react


const CentralFeed = () => {
  

  return (
    <div className="central-feed-x">
      <div className="tweet-composer">
        <div className="user-avatar">
          <img 
            src="https://i.pravatar.cc/" 
            alt="User Avatar" 
            className="create-post-avatar" 
          />
        </div>
        <textarea placeholder="What's happening?"></textarea>
        <div className="composer-actions">
          <div className="composer-icons"><pre>
            {/* Placeholder for icons: image, GIF, poll, emoji, schedule */}
            <button className='action-icon-button'><Image  /></button><span>  </span>
            <button className='action-icon-button'><Film  /></button><span>  </span>
            <button className='action-icon-button'><BarChart3  /></button><span>  </span>
            <button className='action-icon-button'><Smile  /></button><span>  </span>
            <button className='action-icon-button'><Calendar  /></button>
          </pre>
          </div>
          <Link to="/create-post" className="post-button-composer">Post</Link>
        </div>
      </div>

      <div className="feed-divider"></div> {/* Thin divider line */}

      {/* Render example tweets */}
      {/* <Tweet tweet={exampleTweet} /> */}
            
    </div>
  );
};

export default CentralFeed;
