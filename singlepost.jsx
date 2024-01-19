import React, { useEffect, useState } from 'react';

const PostContainer = () => {
  const [isLiked, setIsLiked] = useState(false);
  const commentsData = [
    { username: "Vizthewiz", text: "Great photo!" },
    { username: "Samsamzebra", text: "Love it!" },
    { username: "Miilovescats", text: "Awesome!" },
    // Add more comments as needed
  ];

  useEffect(() => {
    const likeButton = document.querySelector('.like-button');
    const heartIcon = likeButton.querySelector('i');

    likeButton.addEventListener('click', () => {
      // Toggle heart icon
      heartIcon.classList.toggle('far', !isLiked);
      heartIcon.classList.toggle('fas', isLiked);

      // Toggle isLiked
      setIsLiked(!isLiked);
    });
  }, [isLiked]);

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-info">
          <img src="bird pixel.jpg" alt="User Avatar" />
          <p className="username">FirstUser101</p>
        </div>
        <p className="timestamp">Posted 2 hours ago</p>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <div className="post-content">
        <img src="birdvisionphoto.png" alt="Post Image" />
        <p className="caption">Check this out! #Rarebird</p>
        <button className="interaction-buttons like-button">
          <i className={`fas fa-heart ${isLiked ? 'fas' : 'far'}`}></i>
        </button>

        <button className="interaction-buttons">
          <i className="fas fa-share"></i>
        </button>
        <button className="interaction-buttons">
          <i className="fas fa-comment"></i>
        </button>

        <button className="interaction-buttons save">
          <i className="fas fa-download"></i>
        </button>
      </div>

      <div className="comments-section">
        {/* Comments added with JavaScript */}
        {commentsData.map((commentData, index) => (
          <div key={index} className="comment">
            <p className="username">{`${commentData.username}:`}</p>
            <p className="comment-text">{commentData.text}</p>
          </div>
        ))}
      </div>
      <div className="engagement-metrics">
        <p className="likes-count">120 likes</p>
        <p className="comments-count">View all comments</p>
        <p className="shares-count">8 shares</p>
      </div>
    </div>
  );
};

export default PostContainer;
