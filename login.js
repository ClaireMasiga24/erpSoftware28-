let loginButton = document.querySelector('button');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

function verifyLogin(username, password) {
  const validUsernames = ['admin1', 'admin2', 'admin3'];
  const validPassword = 'see';
  return validUsernames.includes(username) && password === validPassword;
}


  if (verifyLogin(username, password)) {
    let isAdmin = ['admin1', 'admin2', 'admin3'].includes(username);
    window.location.href = isAdmin ? 'admin.html' : 'salesAgents.html';
  } else {
    alert('Invalid login credentials');
  }

loginButton.addEventListener('click', () => {
  let username = usernameInput.value.trim();
  let password = passwordInput.value.trim();

  if (verifyLogin(username, password)) {
    let isAdmin = ['admin1', 'admin2', 'admin3'].includes(username);
    window.location.href = isAdmin ? 'admin.html' : 'salesAgents.html';
  } else {
    alert('Invalid login credentials');
  }

  // Reset the form
  usernameInput.value = '';
  passwordInput.value = '';
});

//Mr.Andrew's answer to redirection I will add event listeners to the link to sales agentpage
//First I'm adding a script tag to the id

let salesAgentsLink = document.getElementById('sales-agents-link');
salesAgentsLink.addEventListener('click', () => {
  window.location.href = 'salesAgents.html';
});

  //Now the code for redirection
  


