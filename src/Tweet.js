import React from 'react';
import './Tweet.css'; // Shared stylesheet
import {MessageCircle,RefreshCcw,  Heart,  Share2,  Bookmark} from 'lucide-react'; // Import icons from lucide-react

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet-x">
      <div className="tweet-header">
        <img src={tweet.avatar} alt="User Avatar" className="tweet-avatar" />
        <div className="tweet-user-info">
          <span className="tweet-user-name">{tweet.name}</span>
          <span className="tweet-user-handle">{tweet.handle}</span>
          <span className="tweet-time">· {tweet.time}</span>
        </div>
        <button className="tweet-options">...</button>
      </div>
      <div className="tweet-content">
        <p>{tweet.text}</p>
        {tweet.media && (
          <div className="tweet-media-container">
            {/* This is a placeholder for video. In a real app, you'd use a video player */}
            <img src={tweet.media} alt="Tweet media" className="tweet-media-thumbnail" />
            <div className="video-overlay">▶</div> {/* Play button overlay */}
          </div>
        )}
      </div>
      <div className="tweet-stats">
        {tweet.views && <span className="stat-item">Views: {tweet.views}</span>}
      </div>
      <div className="tweet-actions">
        <button className="action-button"><MessageCircle className="w-6 h-6 text-blue-600" /> {tweet.replies}</button>
        <button className="action-button"><RefreshCcw className="w-6 h-6 text-blue-600" /> {tweet.retweets}</button>
        <button className="action-button"><Heart className="w-6 h-6 text-blue-600" /> {tweet.likes}</button>
        <button className="action-button"><Bookmark className="w-6 h-6 text-blue-600" /> {tweet.bookmarks}</button>
        <button className="action-button"><Share2 className="w-6 h-6 text-blue-600" /></button>
      </div>
    </div>
  );
};

export default Tweet;