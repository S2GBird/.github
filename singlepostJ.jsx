document.addEventListener('DOMContentLoaded', function () {
  const likeButton = document.querySelector('.like-button');
  const commentsData = [
    { username: "Vizthewiz", text: "Great photo!" },
    { username: "Samsamzebra", text: "Love it!" },
    { username: "Miilovescats", text: "Awesome!" },
    // Add more comments as needed
  ];

  const commentsSection = document.querySelector('.comments-section');

  let isLiked = false; 

  likeButton.addEventListener('click', function () {
    const heartIcon = likeButton.querySelector('i');

    //heart icon toggle
    heartIcon.classList.toggle('far');
    heartIcon.classList.toggle('fas', isLiked);

   
    isLiked = !isLiked;
  });

  commentsData.forEach(commentData => {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    const usernameElement = document.createElement('p');
    usernameElement.classList.add('username');
    usernameElement.textContent = commentData.username + ":";

    const textElement = document.createElement('p');
    textElement.classList.add('comment-text');
    textElement.textContent = commentData.text;

    commentElement.appendChild(usernameElement);
    commentElement.appendChild(textElement);

    commentsSection.appendChild(commentElement);
  });
});
