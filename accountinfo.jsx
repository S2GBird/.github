import AccountInfoCss from './accountinfocss.jsx'; 
import apiClient from '../../Services/apiClient';
import { useAuthContext } from '../../Services/authProvider';
import { useState, memo } from 'react'


function AccountInfo() {
  const [message, setMessage] = useState('')
  const { user, setUser, globalError, setGlobalError } = useAuthContext() 


  
    const fetchExampleMessage = async () => {
    const { data, error } = await apiClient.healthCheck() 
    if (data) { 
      setMessage(data) 
    }
    if (error) { 
      console.log(error) 
    }
  }


  return (
    <div className={AccountInfoCss['account-info']}>
      <h2>ACCOUNT INFO PAGE</h2>
      <button onClick={fetchExampleMessage}>Click this button to show message</button>
      {message && <p>This is my message: {message}</p>}

      {/* HTML content */}
    <header>
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
      <label class="toggle-label">Profile Visibility:</label>
      <div class="toggle">
        <input type="checkbox" id="visibilityToggle" onchange="toggleVisibility()">
        <label for="visibilityToggle" class="toggle-switch"></label>
      </div>
      <span id="visibilityLabel">Public</span>
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
  </html>
        
      

      {/* JavaScript */}
  <script>
  function showEditPopup() {
  const popup = document.getElementById('editPopup');
  popup.style.display = 'block';

  const nameInput = document.getElementById('editName');
  const emailInput = document.getElementById('editEmail');
  const passwordInput = document.getElementById('editPassword');

  
  nameInput.value = document.querySelector('.profile-name').textContent;
  emailInput.value = ''; 
  passwordInput.value = ''; 
}

function closeEditPopup() {
  const popup = document.getElementById('editPopup');
  popup.style.display = 'none';
}

function saveChanges() {
  const newName = document.getElementById('editName').value;
  const newEmail = document.getElementById('editEmail').value;
  const newPassword = document.getElementById('editPassword').value;

  if (newName && newEmail && newPassword) {
    document.querySelector('.profile-name').textContent = newName;
    
    closeEditPopup();
    alert('Profile updated successfully!');
  } else {
    alert('Please fill in all fields.');
  }
}

function toggleMenu() {
  console.log('Toggle Menu Clicked!');
  const dropdown = document.querySelector('.dropdown-content');
  const settingsDropdown = document.getElementById('settingsDropdown');

  // Hide settings dropdown if it's visible
  if (settingsDropdown.style.display === 'block') {
    settingsDropdown.style.display = 'none';
  }

  // Toggle the menu dropdown
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function toggleSettings() {
  const settingsDropdown = document.getElementById('settingsDropdown');
  const dropdown = document.querySelector('.dropdown-content');

  // Hide menu dropdown if it's visible
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  }

  // Toggle the settings dropdown
  settingsDropdown.style.display = (settingsDropdown.style.display === 'block') ? 'none' : 'block';
}


function toggleVisibility() {
  const visibilityLabel = document.getElementById('visibilityLabel');
  const visibilityToggle = document.getElementById('visibilityToggle');

  visibilityLabel.textContent = visibilityToggle.checked ? 'Private' : 'Public';
}



  <script src="script.js"></script>
 
   
  );
}

export default memo(AccountInfo)













    
