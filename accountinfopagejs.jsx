
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


