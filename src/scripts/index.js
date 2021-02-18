import '../styles/main';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import login from './services/auth.server';
import { notify } from './views/notification';
import renderOverlayRegistration from './views/overlay';
import closeOverlay from './helpers/closeOverlay';

//Elements
const { form, inputEmail, inputPassword, registration, registrationContainer } = UI;
const inputs = [inputEmail, inputPassword];

//Events
form.addEventListener('submit', e => {
	e.preventDefault();
	onSubmit();
});

registration.addEventListener('click', e => {
	e.preventDefault();
	renderOverlayRegistration();
});

registrationContainer.addEventListener('click', e => {
	if (e.target.tagName === 'A') {
		closeOverlay();
	}
});

inputs.forEach(input => input.addEventListener('focus', () => removeInputError(input)));

//Functions
async function onSubmit() {
	const isValidateForm = inputs.every(input => {
		const isValidateInput = validate(input);
		if (!isValidateInput) {
			if (input.classList.contains('is-invalid')) return;
			showInputError(input);
		}
		return isValidateInput;
	});

	if (!isValidateForm) return;

	try {
		await login(inputEmail.value, inputPassword.value);
		form.reset();
		notify({ msg: 'Login success', className: 'alert_success' });
	} catch (err) {
		notify({ msg: 'Login faild', className: 'alert_warning' });
	}
}

setTimeout(() => notify({ msg: 'Welcome to my app!' }), 1000);
