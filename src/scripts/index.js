import '../styles/main';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError } from './views/form';
import { login, signup } from './services/auth.server';
import { notify } from './views/notification';
import removeValidationError from './helpers/focusInput';

//Elements
const {
	form,
	inputEmail,
	inputPassword,
	openOverlay,
	overlay,
	closeOverlay,
	newUser,
	birthday,
} = UI;

const inputsLogin = [inputEmail, inputPassword];
const [...inputsSignup] = document.querySelectorAll('.form__input_registration');

//Events
form.addEventListener('submit', e => {
	const formData = new FormData(form);
	const json = JSON.stringify(Object.fromEntries(formData));
	e.preventDefault();
	onSubmit(form, inputsLogin, login, json, 'Login success', 'Login faild');
});

newUser.addEventListener('submit', e => {
	const [
		date_of_birth_year,
		date_of_birth_month,
		date_of_birth_day,
	] = birthday.value.split('-');

	const formData = new FormData(newUser);
	formData.delete('birthday');
	formData.append('date_of_birth_year', date_of_birth_year);
	formData.append('date_of_birth_month', date_of_birth_month);
	formData.append('date_of_birth_day', date_of_birth_day);
	const json = JSON.stringify(Object.fromEntries(formData));
	e.preventDefault();
	onSubmit(
		newUser,
		inputsSignup,
		signup,
		json,
		'Account created!',
		'Oppps! You have problems!',
	);
});

openOverlay.addEventListener('click', e => {
	e.preventDefault();

	overlay.classList.add('overlay_show');
});

closeOverlay.addEventListener('click', e => {
	e.preventDefault();
	overlay.classList.remove('overlay_show');
});

//Functions
async function onSubmit(form, inputs, sendForm, data, messageSuccess, messageFailed) {
	removeValidationError(inputs);
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
		await sendForm(data);
		form.reset();
		notify({ msg: `${messageSuccess}`, className: 'alert_success' });
	} catch (err) {
		notify({ msg: `${messageFailed}`, className: 'alert_warning' });
	}
}

setTimeout(() => notify({ msg: 'Welcome to my app!' }), 1000);
