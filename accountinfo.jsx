import React, { useState } from 'react';

function AccountInfoPage() {
  const showEditPopup = () => {
    const popup = document.getElementById('editPopup');
    popup.style.display = 'block';

    const nameInput = document.getElementById('editName');
    const emailInput = document.getElementById('editEmail');
    const passwordInput = document.getElementById('editPassword');

    nameInput.value = document.querySelector('.profile-name').textContent;
    emailInput.value = '';
    passwordInput.value = '';
  };

  const closeEditPopup = () => {
    const popup = document.getElementById('editPopup');
    popup.style.display = 'none';
  };

  const saveChanges = () => {
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
  };

  const toggleMenu = () => {
    console.log('Toggle Menu Clicked!');
    const dropdown = document.querySelector('.dropdown-content');
    const settingsDropdown = document.getElementById('settingsDropdown');

    // Hide settings dropdown if it's visible
    if (settingsDropdown.style.display === 'block') {
      settingsDropdown.style.display = 'none';
    }

    // Toggle the menu dropdown
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  };

  const toggleSettings = () => {
    const settingsDropdown = document.getElementById('settingsDropdown');
    const dropdown = document.querySelector('.dropdown-content');

    // Hide menu dropdown if it's visible
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    }

    // Toggle the settings dropdown
    settingsDropdown.style.display = settingsDropdown.style.display === 'block' ? 'none' : 'block';
  };

  const toggleVisibility = () => {
    const visibilityLabel = document.getElementById('visibilityLabel');
    const visibilityToggle = document.getElementById('visibilityToggle');

    visibilityLabel.textContent = visibilityToggle.checked ? 'Private' : 'Public';
  };

  return (
    <>
      {/* HTML code */}
      <header>
        <div className="profile-header">
          <div className="profile-info">
            <div className="profile-name">Username</div>
            <div className="profile-actions">
            </div>

            <div className="profile-stats">
              <div className="stat">Posts<br /><span>0</span></div>
              <div className="stat">Chirping<br /><span>0</span></div>
              <div className="stat">Chirpers<br /><span>0</span></div>
            </div>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="dropdown-content">
              <a href="#">Activity</a>
              <a href="#">Favorites</a>
              <a href="#">Insights</a>
            </div>
          </div>

          <div className="settings-icon" onClick={toggleSettings}>
            <i className="fas fa-cog"></i>
            <div className="settings-dropdown" id="settingsDropdown">
              <a href="#">Language</a>
              <a href="#">Accessibility</a>
              <a href="#">Help</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="toggle-container">
          <label className="toggle-label">Profile Visibility:</label>
          <div className="toggle">
            <input type="checkbox" id="visibilityToggle" onChange={toggleVisibility} />
            <label htmlFor="visibilityToggle" className="toggle-switch"></label>
          </div>
          <span id="visibilityLabel">Public</span>
        </div>

        <div className="profile-circle">
          <img src="bird pixel.jpg" alt="Profile Image" />
        </div>

        <div className="profile-caption">
          <span>Add text here</span>
        </div>

        <div className="profile-actions-bar">
          <div className="edit-profile" onClick={showEditPopup}>Edit Profile</div>
          <div className="share-profile">Share Profile</div>
        </div>

        <div className="post-section">
          <div className="no-post">No posts yet</div>
        </div>
      </main>

      <div id="editPopup" className="popup">
        <div className="popup-content">
          <span className="close" onClick={closeEditPopup}>&times;</span>
          <h2>Edit Profile</h2>
          <label htmlFor="editName">Name:</label>
          <input type="text" id="editName" required />

          <label htmlFor="editEmail">Email:</label>
          <input type="email" id="editEmail" required />

          <label htmlFor="editPassword">Password:</label>
          <input type="password" id="editPassword" required />

          <button onClick={saveChanges}>Save Changes</button>
        </div>
      </div>
       <script src="script.js"></script>
  );
};

export default memo(AccountInfoPage);
