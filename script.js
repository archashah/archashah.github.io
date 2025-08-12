// script.js
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function() {
	document.body.classList.toggle('dark-mode');
});
const homeLink = document.getElementById('home-link');
const businessLink = document.getElementById('business-link');
const homeSection = document.getElementById('home-section');
const businessSection = document.getElementById('business-section');

homeLink.addEventListener('click', function(e) {
	e.preventDefault();
	homeSection.style.display = 'block';
	businessSection.style.display = 'none';
	homeLink.classList.add('active');
	businessLink.classList.remove('active');
});

businessLink.addEventListener('click', function(e) {
	e.preventDefault();
	homeSection.style.display = 'none';
	businessSection.style.display = 'block';
	businessLink.classList.add('active');
	homeLink.classList.remove('active');
});
