function animationCloseOverlay() {
	const overlayContent = document.querySelector('.overlay__content');
	overlayContent.animate([{ transform: 'scale(1)' }, { transform: 'scale(0)' }], {
		duration: 500,
	});
}

export default animationCloseOverlay;