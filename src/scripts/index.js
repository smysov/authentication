import '../styles/main';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError, checkClassError } from './views/form';
import login from './services/auth.server';

//Elements
const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

//Events
form.addEventListener('submit', e => {
	e.preventDefault();
	onSubmit();
});

inputs.forEach(input => input.addEventListener('focus', () => removeInputError(input)));

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
	} catch (error) {
		console.log(error);
	}
}
