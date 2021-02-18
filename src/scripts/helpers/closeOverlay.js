import animationCloseOverlay from './animationOverlay';
function closeOverlay() {
	const overlay = document.querySelector('.overlay');
		animationCloseOverlay();
		setTimeout(() => overlay.remove(), 500);
}
export default closeOverlay;
