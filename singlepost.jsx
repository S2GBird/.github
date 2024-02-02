import React, { useEffect, useState } from 'react';

const SinglePost = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [commentsData, setCommentsData] = useState([
        { username: "Vizthewiz", text: "Great photo!" },
        { username: "Samsamzebra", text: "Love it!" },
        { username: "Miilovescats", text: "Awesome!" },
    ]);
    const [teaserComments] = useState([
        { username: "FakeUser1", text: "Nice photo!" },
        { username: "FakeUser2", text: "Fire photo!" },
        { username: "FakeUser3", text: "Stunning shot!" },
    ]);

    useEffect(() => {
        const likeButton = document.querySelector('.like-button');
        const shareButton = document.querySelector('.interaction-buttons.share');
        const likesCountElement = document.querySelector('.likes-count');
        const sharesCountElement = document.querySelector('.shares-count');
        const postTimestamp = document.querySelector('.timestamp');
        const ellipsisIcon = document.getElementById('ellipsis-icon');
        const optionsMenu = document.getElementById('options-menu');
        const deleteOption = document.getElementById('delete-option');
        const makePublicOption = document.getElementById('make-public-option');
        const makePrivateOption = document.getElementById('make-private-option');
        const viewAllCommentsLink = document.getElementById('view-all-comments-link');
        const commentsPopup = document.getElementById('comments-popup');
        const closeCommentsPopup = document.getElementById('close-comments-popup');
        const allCommentsContent = document.getElementById('all-comments-content');
        const newCommentInputPopup = document.getElementById('new-comment-input-popup');
        const addCommentButtonPopup = document.getElementById('add-comment-button-popup');
        const commentIcon = document.querySelector('.fa-comment');
        const downloadButton = document.getElementById('download-button');

        let isShared = false;
        let likesCount = 3;
        let sharesCount = 0;
        let postId = generatePostId(); // Initial post ID

        const postDate = new Date(); // Replace this with the actual post timestamp
        updateTimestamp(postDate);

        function updateTimestamp(postDate) {
            const now = new Date();
            const timeDifference = now - postDate;

            const seconds = Math.floor(timeDifference / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            let timestampText = '';

            if (days > 0) {
                timestampText = days === 1 ? 'Posted 1 day ago' : `Posted ${days} days ago`;
            } else if (hours > 0) {
                timestampText = hours === 1 ? 'Posted 1 hour ago' : `Posted ${hours} hours ago`;
            } else if (minutes > 0) {
                timestampText = minutes === 1 ? 'Posted 1 minute ago' : `Posted ${minutes} minutes ago`;
            } else {
                timestampText = seconds === 1 ? 'Posted 1 second ago' : `Posted ${seconds} seconds ago`;
            }

            postTimestamp.textContent = timestampText;
        }

        const heartIcon = likeButton.querySelector('i');

        heartIcon.classList.add('far');
        heartIcon.classList.remove('fas');

        likeButton.addEventListener('click', function () {
            if (isLiked) {
                // Unlike post (send a patch request to decrement likes on the server)
                // Simulating the update on the client-side
                likesCount--;
            } else {
                // Like post (send a patch request to increment likes on the server)
                // Simulating the update on the client-side
                likesCount++;
            }

            heartIcon.classList.toggle('fas', !isLiked);
            heartIcon.classList.toggle('far', isLiked);
            likesCountElement.textContent = `${likesCount} likes`;

            setIsLiked(!isLiked);
        });

        if (shareButton) {
            shareButton.addEventListener('click', function () {
                if (!isShared) {
                    // Increase share count only if not already shared
                    sharesCount++;
                    sharesCountElement.textContent = `${sharesCount} shares`;

                    const shareLink = `http://www.chirp.com/post/${postId}`;
                    alert(`Share this link: ${shareLink}`);

                    isShared = true;
                } else {
                    // Display the share link even if the post has been shared before
                    const shareLink = `http://www.chirp.com/post/${postId}`;
                    alert(`Shared! link: ${shareLink}`);
                }
            });
        } else {
            console.error('Error sharing');
        }

        ellipsisIcon.addEventListener('click', function (event) {
            event.stopPropagation();

            optionsMenu.classList.toggle('visible');

            const iconPosition = ellipsisIcon.getBoundingClientRect();
            optionsMenu.style.top = iconPosition.bottom + 'px';
            optionsMenu.style.left = iconPosition.left + 'px';
        });

        window.addEventListener('scroll', function () {
            const iconPosition = ellipsisIcon.getBoundingClientRect();
            optionsMenu.style.top = iconPosition.bottom + 'px';
            optionsMenu.style.left = iconPosition.left + 'px';
        });

        deleteOption.addEventListener('click', function () {
            if (true /* replace with logic to check if the user is the creator */) {
                alert('Post deleted!');
            }
        });

        makePublicOption.addEventListener('click', function () {
            if (true /* replace with logic to check if the user is the creator */) {
                alert('Post set to public!');
            }
        });

        makePrivateOption.addEventListener('click', function () {
            if (true /* replace with logic to check if the user is the creator */) {
                alert('Post set to private!');
            }
        });

        viewAllCommentsLink.addEventListener('click', showCommentsPopup);

        commentIcon.addEventListener('click', showCommentsPopup);

        closeCommentsPopup.addEventListener('click', closeCommentsPopupFunc);

        addCommentButtonPopup.addEventListener('click', function () {
            const newCommentText = newCommentInputPopup.value.trim();
            if (newCommentText !== '') {
                addCommentPopup('NewUser', newCommentText);

                // Update the commentsData array with the new comment
                setCommentsData(prevComments => [
                    ...prevComments,
                    { username: 'NewUser', text: newCommentText },
                ]);

                newCommentInputPopup.value = '';
            }
        });

        downloadButton.addEventListener('click', function () {
            const postImage = document.querySelector('.post-content img');

            if (postImage) {
                const imageUrl = postImage.src;

                const downloadLink = document.createElement('a');
                downloadLink.href = imageUrl;
                downloadLink.download = 'post_image';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            } else {
                console.error('No post image found.');
            }
        });

        document.addEventListener('click', function (event) {
            if (!ellipsisIcon.contains(event.target) && !optionsMenu.contains(event.target)) {
                optionsMenu.classList.remove('visible');
            }
        });

        function showCommentsPopup() {
            commentsPopup.style.width = '500px';
            commentsPopup.style.height = '600px';
            commentsPopup.style.display = 'block';

            allCommentsContent.innerHTML = ''; // Clear existing comments

            // Display teaser comments
            teaserComments.forEach(comment => {
                addCommentPopup(comment.username, comment.text);
            });

            // Display additional comments
            commentsData.forEach(comment => {
                addCommentPopup(comment.username, comment.text);
            });
        }

        function closeCommentsPopupFunc() {
            commentsPopup.style.display = 'none';
        }

        function addCommentPopup(username, text) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `<strong>${username}:</strong> ${text}`;
            allCommentsContent.appendChild(commentDiv);
        }

        function generatePostId() {
            return Math.floor(Math.random() * 1000) + 1;
        }
    }, [isLiked, commentsData]);

    return (
        <div className="post-container">
            <div className="post-header">
                <div className="user-info">
                    <img src="bird pixel.jpg" alt="User Avatar" />
                    <p className="username">FirstUser101</p>
                </div>
                <p className="timestamp">Posted 2 hours ago</p>

                <div className="ellipsis-menu">
                    <i className="fas fa-ellipsis-h" id="ellipsis-icon"></i>
                    <div className="options-menu" id="options-menu">
                        <div className="option" id="delete-option">Delete Post</div>
                        <div className="option" id="make-public-option">Make Public</div>
                        <div className="option" id="make-private-option">Make Private</div>
                    </div>
                </div>
            </div>
            <div className="post-content">
                <img src="birdvisionphoto.png" alt="Post Image" />
                <p className="caption">Check this out! #Rarebird</p>
                <button className="interaction-buttons like-button">
                    <i className={`fas fa-heart ${isLiked ? 'fas' : 'far'}`}></i>
                </button>

                <button className="interaction-buttons share">
                    <i className="fas fa-share"></i>
                </button>

                <button className="interaction-buttons">
                    <i className="fas fa-comment"></i>
                </button>
                <button className="interaction-buttons save" id="download-button">
                    <i className="fas fa-download"></i>
                </button>
            </div>

            <div className="comments-section">
                <div className="engagement-metrics">
                    <p className="likes-count">{likesCount} likes</p>

                    <div className="user-comments-section teaser" id="user-comments-section-teaser">
                        {teaserComments.map((comment, index) => (
                            <div key={index} className="user-comment">
                                <strong>{comment.username}:</strong> {comment.text}
                            </div>
                        ))}
                    </div>

                    <p className="view-all-comments" id="view-all-comments-link">View all comments</p>

                    <div className="add-comment-section">
                        {/* Additional comments added with JavaScript */}
                        {commentsData.map((comment, index) => (
                            <div key={index} className="comment">
                                <strong>{comment.username}:</strong> {comment.text}
                            </div>
                        ))}
                    </div>

                    <p className="shares-count" id="shares-count">{sharesCount} shares</p>
                </div>
            </div>

            <div id="comments-popup">
                <div className="popup-content">
                    <span id="close-comments-popup" className="close-popup">&times;</span>
                    <h2 className="comments-header">All Comments</h2>
                    <div id="all-comments-content" className="all-comments-content"></div>
                    <div className="add-comment-section-popup">
                        <input type="text" id="new-comment-input-popup" placeholder="Add a comment..." />
                        <button id="add-comment-button-popup">&#9650;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
