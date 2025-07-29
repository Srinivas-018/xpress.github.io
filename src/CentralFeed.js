import React from 'react';
import {Link} from 'react-router-dom';
import './CentralFeed.css'; // Shared stylesheet
import { Image,Film, BarChart3,Smile, Calendar, MessageCircle,RefreshCcw,Heart,Share2,Bookmark,Search,Play} from 'lucide-react'; // Import icons from lucide-react
import IconButton from "./IconButton";
import Tweet from './Tweet'; // Import individual tweet component

const CentralFeed = () => {
  // Example tweet data (in a real app, this would come from an API)
  const exampleTweet = {
    avatar: 'https://via.placeholder.com/48/444444/FFFFFF?text=NM', // Placeholder
    name: 'Name name',
    handle: '@username',
    time: '2h',
    text: 'texttexttext',
    media: 'https://img.youtube.com/vi/a_video_id/hqdefault.jpg', // Placeholder for a video thumbnail
    views: '1M',
    replies: '10k ',
    retweets: '4635 ',
    likes: '19K',
    bookmarks: '503K',
    shares: '' // Share icon
  };

  return (
    <>
    <div className="central-feed-x">
      <div className="central-feed-x-header">
        <div className="central-feed-x-tabs">
          <button className="tab active">For you</button>
          <button className="tab active">Following</button>
        </div>
        <div className="search-icon-header"><Search className="w-6 h-6 text-blue-600" /></div> {/* Small search icon in header */}
      </div>

      <div className="tweet-composer">
        <div className="user-avatar"></div> {/* User's avatar */}
        <textarea placeholder="What's happening?"></textarea>
        <div className="composer-actions">
          <div className="composer-icons"><pre>
            {/* Placeholder for icons: image, GIF, poll, emoji, schedule */}
            <button className='action'><Image className="w-6 h-6 text-blue-600" /></button><span>  </span>
            <button className='action'><Film className="w-6 h-6 text-blue-600" /></button><span>  </span>
            <button className='action'><BarChart3 className="w-6 h-6 text-blue-600" /></button><span>  </span>
            <button className='action'><Smile className="w-6 h-6 text-blue-600" /></button><span>  </span>
            <button className='action'><Calendar className="w-6 h-6 text-blue-600" /></button>
          </pre>
          </div>
          <button className="post-button-composer">Post</button>
        </div>
      </div>

      <div className="feed-divider"></div> {/* Thin divider line */}

      {/* Render example tweets */}
      <Tweet tweet={exampleTweet} />
            
    </div>
    
    <div className="right-sidebar-x">
      <div className="search-bar-right">
        <Search className="w-6 h-6 text-blue-600" /> <input type="text" placeholder="Search" />
      </div>

      <div className="section subscribe-premium-section">
        <h3>Subscribe to Premium</h3>
        <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
        <button className="subscribe-button">Subscribe</button>
      </div>

       <div className="section whats-happening-section">
        <h3>What's happening</h3>
        <div className="trend-item">
          <div className="trend-category">title trending</div>
          <div className="trend-title">#news</div>
          <div className="trend-posts">0 posts</div>
        </div>
        <div className="trend-item">
          <div className="trend-category">Trending in India</div>
          <div className="trend-title">#tags</div>
          <div className="trend-posts">0 posts</div>
        </div>
        <div className="trend-item">
          <div className="trend-category">Entertainment - Trending</div>
          <div className="trend-title">#hashtags</div>
          <div className="trend-posts">0 posts</div>
        </div>
        <a href="#" className="show-more-link">Show more</a>
      </div>

      <div className="section who-to-follow-section">
        <h3>Who to follow</h3>
        {/* Placeholder for follow suggestions */}
        <div className="follow-suggestion">
          <div className="user-avatar"></div>
          <div className="user-info">
            <div className="user-name">User Name</div>
            <div className="user-handle">@username</div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
        <a href="#" className="show-more-link">Show more</a>
      </div>

      <div className="footer-links">
        <span>© 2025 Xpress.</span>
      </div>
    </div>
    </>
  );
};

export default CentralFeed;
