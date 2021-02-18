import '../styles/main';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login, signup } from './services/auth.server';
import { notify } from './views/notification';
import writDataBirthday from './helpers/birthdayValue';
import writeDataRadioButton from './helpers/radioValue';
import writeDataInput from './helpers/inputValue';
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
} = UI;

const inputs = [inputEmail, inputPassword];

//Events
form.addEventListener('submit', e => {
	e.preventDefault();
	onSubmit();
});

newUser.addEventListener('submit', e => {
	e.preventDefault();
	onFormSingup();
});

openOverlay.addEventListener('click', e => {
	e.preventDefault();

	overlay.classList.add('overlay_show');
});

closeOverlay.addEventListener('click', e => {
	e.preventDefault();
	overlay.classList.remove('overlay_show');
});

removeValidationError(inputs);

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

async function onFormSingup() {
	const userData = {};
	const [...inputs] = document.querySelectorAll('.form__input_registration');
	removeValidationError(inputs);

	const isValidateForm = inputs.every(input => {
		const isValidateInput = validate(input);
		if (!isValidateInput) {
			if (input.classList.contains('is-invalid')) return;
			showInputError(input);
		}

		writeDataInput(input, userData);
		writDataBirthday(userData);
		writeDataRadioButton(userData);

		return isValidateInput;
	});

	if (!isValidateForm) return;

	try {
		await signup(userData);
		newUser.reset();
		notify({ msg: 'Account created!', className: 'alert_success' });
	} catch (err) {
		notify({ msg: 'Oppps! You have problems!', className: 'alert_warning' });
	}
}

setTimeout(() => notify({ msg: 'Welcome to my app!' }), 1000);
