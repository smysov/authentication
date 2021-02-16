function errorInputTemplate(msg) {
	return `
    <div class="form__error">${msg}</div>
  `;
}

/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} element
 */

export function showInputError(element) {
	const parent = element.parentElement;
	const message = element.dataset.invalidMessage || 'Invalid input';
	element.classList.add('is-invalid');
	const template = errorInputTemplate(message);
	parent.insertAdjacentHTML('beforeend', template);
}

/**
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} element
 */

export function removeInputError(element) {
	const parent = element.parentElement;
	const error = parent.querySelector('.form__error');
	if (!error) return;
	element.classList.remove('.form__error');
	parent.removeChild(error);
}
