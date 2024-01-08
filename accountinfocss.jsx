body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fafafa;
}

header {
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 0 10px #0000001A; 
}


.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-info {
  display: flex;
  align-items: center;
}

.profile-name {
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
}

.profile-actions {
  display: flex;
  align-items: center;
}



.drawer-icon,
.settings-icon {
  cursor: pointer;
  font-size: 24px;
  color: #333;
}




.profile-info {
  display: flex;
  align-items: center;
  margin-right: auto; 
}

.profile-name {
  font-size: 18px;
  font-weight: bold;
  margin-right: 30px;
}

.profile-actions {
  display: flex;
  align-items: center;
}

.profile-stats {
  display: flex;
  align-items: center;
  margin-left: auto; 
}

.profile-stats .stat {
  margin-left: 30px;
}




.stat span {
  font-weight: bold;
}

main {
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
}

.profile-circle {
  margin-top: 20px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-circle img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.profile-caption {
  margin-top: 10px;
}

.profile-caption span {
  color: #888;
}

.profile-actions-bar {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.edit-profile,
.share-profile {
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  margin-right: 10px;
  background-color: #3498db;
  color: #fff;
}

.post-section {
  margin-top: 20px;
}

.no-post {
  color: #888;
}



.menu-icon {
  cursor: pointer;
  font-size: 24px;
  color: #333;
  margin-left: auto; 
  margin-right: 10px; 
  position: relative;
}


position: relative;
}


.menu-icon:hover .dropdown-content {
  display: block;
}

.bar {
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  top: 100%;
}

.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 14px; 
  border-bottom: none; 
  transition: background-color 0.3s;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}


.popup {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
  background-color: #fff;
  margin: 10% auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 400px;
  position: relative;
}

.close {
  color: #aaa;
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #555;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}






.settings-icon:hover,
.menu-icon:hover {
  color: #3498db;
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  20%, 50%, 80% {
    transform: translateX(-5px);
  }
  40%, 60% {
    transform: translateX(5px);
  }
}




.settings-icon {
  cursor: pointer;
  font-size: 24px;
  color: #333;
  position: relative;
}

.settings-icon:hover .settings-dropdown {
  display: block;
}

.settings-dropdown {
  display: none;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 2;
  top: 100%;
  right: 0;
  padding: 8px 0;
}

.settings-dropdown a {
  display: block;
  padding: 10px;
  font-size: 16px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;
}

.settings-dropdown a:hover {
  background-color: #f1f1f1;
}



.toggle-container {
  margin-bottom: 16px;
  display:inline-flex;
  align-items: center;
  margin-left: auto; 
}


.toggle-label {
  margin-right: 5px; 
  margin-left: auto; 
}


.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 40px;
}


.toggle-switch {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: background-color 0.3s;
}


.toggle-switch:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: black;
  border-radius: 50%;
  transition: transform 0.3s;
}


#visibilityToggle:checked + .toggle-switch {
  background-color: #0077b5; 
}


#visibilityToggle:checked + .toggle-switch:before {
  transform: translateX(26px);
}


#visibilityLabel {
  margin-left: 5px; 
}