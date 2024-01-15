<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>SinglePost</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
</head>

  <body>
      <div class="post-container">
          <div class="post-header">
              <div class="user-info">
                  <img src="bird pixel.jpg" alt="User Avatar">
                  <p class="username">FirstUser101</p>
              </div>
              <p class="timestamp">Posted 2 hours ago</p>
              <i class="fas fa-ellipsis-h"></i>
          </div>
          <div class="post-content">
              <img src="birdvisionphoto.png" alt="Post Image">
              <p class="caption">Check this out! #Rarebird</p>
              <button class="interaction-buttons like-button">
                  <i class="fas fa-heart"></i>
              </button>


              <button class="interaction-buttons">
                  <i class="fas fa-share"></i> 
              </button>
              <button class="interaction-buttons">
                  <i class="fas fa-comment"></i> 
              </button>
            
              <button class="interaction-buttons save">
                  <i class="fas fa-download"></i>  
              </button>
            </div>

              <div class="comments-section">
                  <!-- Comments added with JavaScript -->
              </div>
              <div class="engagement-metrics">
                  <p class="likes-count">120 likes</p>
                  <p class="comments-count">View all comments</p>
                  <p class="shares-count">8 shares</p>
              </div>
          </div>
      </div>


      <script src="script.js"></script>
  </body>
 

</html>
