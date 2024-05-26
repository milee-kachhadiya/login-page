document.getElementById('loginForm').addEventListener('submit',(event)=>{
    event.preventDefault();
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var message = document.getElementById('message');

// For demonstration purposes, we'll use a fixed username and password
if(username === 'user' && password === 'pass') {
    message.style.color = 'green';
    message.textContent = 'Login successful!';
} else {
    message.style.color = 'red';
    message.textContent = 'Invalid username or password.';
}
});

function vasu1(event) {
event.preventDefault();
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var message = document.getElementById('message');

// For demonstration purposes, we'll use a fixed username and password
if(username === 'user' && password === 'pass') {
    message.style.color = 'green';
    message.textContent = 'Login successful!';
} else {
    message.style.color = 'red';
    message.textContent = 'Invalid username or password.';
}
}