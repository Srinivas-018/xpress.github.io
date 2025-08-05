import React, { useState } from 'react';
import { Image, List, Smile, Calendar } from 'lucide-react';
import './CreatePost.css';

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    if (postContent.trim()) {
      console.log('New Post:', postContent);
      // Here you would typically send the post to a server
      setPostContent(''); // Reset textarea after posting
    }
  };

  return (
    <div className="create-post-overlay">
      <div className="create-post-container">
        <div className="create-post-header">
          <img 
            src="https://i.pravatar.cc/" 
            alt="User Avatar" 
            className="create-post-avatar" 
          />
          <textarea
            className="create-post-textarea"
            placeholder="What is happening?!"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <div className="create-post-footer">
          <div className="create-post-actions">
            <button className="action-icon-button"><Image size={20} /></button>
            <button className="action-icon-button"><List size={20} /></button>
            <button className="action-icon-button"><Smile size={20} /></button>
            <button className="action-icon-button"><Calendar size={20} /></button>
          </div>
          <button 
            className="create-post-submit-button" 
            onClick={handlePost}
            disabled={!postContent.trim()}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
