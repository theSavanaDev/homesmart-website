import './style.css';

const navigationButton = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navigationButton.addEventListener('click', () => {
	const isExpanded = JSON.parse(navigationButton.getAttribute('aria-expanded'));

	navigationButton.setAttribute('aria-expanded', !isExpanded);
	menuBar.classList.toggle('hidden');
	menuBar.classList.toggle('flex');
});
