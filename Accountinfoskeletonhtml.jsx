<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Account info page</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>

    <div class="profile-header">
      <div class="profile-info">
        <div class="profile-name">Username</div>
        <div class="profile-actions">
         
          
      


          
      </div>
      <div class="profile-stats">
        <div class="stat">Posts<br><span>0</span></div>
        <div class="stat">Chirping<br><span>0</span></div>
        <div class="stat">Chirpers<br><span>0</span></div>
      </div>
    </div>



      <div class="menu-icon" onclick="toggleMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="dropdown-content">
          <a href="#">Activity</a>
          <a href="#">Favorites</a>
          <a href="#">Insights</a>
        </div>
      </div>

      <div class="settings-icon" onclick="toggleSettings()">
        <i class="fas fa-cog"></i>
        <div class="settings-dropdown" id="settingsDropdown">
          <a href="#">Language</a>
          <a href="#">Accessibility</a>
          <a href="#">Help</a>
        </div>
      </div>
  </header>

 

  

  <main>
    <div class="toggle-container">
      <label class="toggle-label">Profile Visibility</label>
      <input type="checkbox" id="visibilityToggle" class="toggle-switch">
      <div class="toggle-slider"></div>
    </div>

    
    <div class="profile-circle">
     
      <img src="bird pixel.jpg" alt="Profile Image">
    </div>

    <div class="profile-caption">
      
      <span>Add text here</span>
    </div>

    <div class="profile-actions-bar">
      
      <div class="edit-profile" onclick="showEditPopup()">Edit Profile</div>
      <div class="share-profile">Share Profile</div>
    </div>

    <div class="post-section">
      
      <div class="no-post">No posts yet</div>
    </div>
  </main>

  <script src="script.js"></script>

  <div id="editPopup" class="popup">
    <div class="popup-content">
      <span class="close" onclick="closeEditPopup()">&times;</span>
      <h2>Edit Profile</h2>
      <label for="editName">Name:</label>
      <input type="text" id="editName" required>

      <label for="editEmail">Email:</label>
      <input type="email" id="editEmail" required>

      <label for="editPassword">Password:</label>
      <input type="password" id="editPassword" required>

      <button onclick="saveChanges()">Save Changes</button>
    </div>
  </div>



  
  
</body>


    


</html>
