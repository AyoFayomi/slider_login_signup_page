const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const sgnUpButton = document.getElementById('sign-Up');
const sgnInButton = document.getElementById('sign-In');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

sgnUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

sgnInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});