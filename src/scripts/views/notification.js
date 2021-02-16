function getContainer() {
	return document.querySelector('.notification');
}

function alertTemplate(msg, className, index) {
	return `
    <div class="alert ${className}" data-index="${index}">
      ${msg}
    </div>
  `;
}

function notifyContainerTemplate() {
	return `
    <div class="notification"></div>
  `;
}

function createNotifyContainer() {
	const template = notifyContainerTemplate();
	document.body.insertAdjacentHTML('afterbegin', template);
}

function getAlertIndex() {
	return document.querySelectorAll('.notification .alert').length;
}

export function notify({
	msg = 'Info message',
	className = 'alert_info',
	timeout = 2000,
} = {}) {
	if (!getContainer()) {
		createNotifyContainer();
	}

	const index = getAlertIndex();
	const template = alertTemplate(msg, className, index);
	const container = getContainer();

	container.insertAdjacentHTML('beforeend', template);

	setTimeout(() => closeNotify(index), timeout);
}

export function closeNotify(index) {
	let alert;

	if (index === undefined) {
		alert = document.querySelector('.notification .alert');
	} else {
		alert = document.querySelector(`.notification .alert[data-index="${index}"]`);
	}

	if (!alert) {
		console.warn('Alert not fount');
		return;
	}

	const container = getContainer();
	container.removeChild(alert);
}
