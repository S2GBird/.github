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
  const dropdown = document.querySelector('.dropdown-content');
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function toggleSettings() {
  const settingsDropdown = document.getElementById('settingsDropdown');
  settingsDropdown.style.display = (settingsDropdown.style.display === 'block') ? 'none' : 'block';
}

const visibilityToggle = document.getElementById('visibilityToggle');

visibilityToggle.addEventListener('change', function () {
  const visibilityText = document.querySelector('.toggle-label');
  visibilityText.textContent = this.checked ? 'Private' : 'Public';
});
