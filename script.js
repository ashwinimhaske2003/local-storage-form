function register() {
  // Get form values
  var id = document.getElementById('id').value;
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var username = document.getElementById('username').value; // Added username field
  var mobile = document.getElementById('mobile').value;

  // Check if mobile number is valid
  if (!/^\d{10}$/.test(mobile)) {
    alert('Mobile number must be 10 digits!');
    return;
  }

  // Check if email is valid
  if (email.indexOf('@') === -1) {
    alert('Invalid email address!');
    return;
  }
// Check if user is logged in
if (isLoggedIn()) {
  // Retrieve stored user data
  var storedData = localStorage.getItem('allTimeUserData');

  // If there's no stored data, initialize an empty array
  var allTimeUserData = storedData ? JSON.parse(storedData) : [];

  // Add current user data to the array
  var userData = {
    id: id,
    name: name,
    email: email,
    username: username,
    mobile: mobile
  };

  allTimeUserData.push(userData);

  // Save updated user data to local storage
  localStorage.setItem('allTimeUserData', JSON.stringify(allTimeUserData));
}

// Function to check if user is logged in
function isLoggedIn() {
  // Check if there's a session or token indicating user is logged in
  return true; // Replace with your logic to determine if user is logged in
}


  // Redirect to dashboard page
  window.location.href = 'dashboard.html';
}




