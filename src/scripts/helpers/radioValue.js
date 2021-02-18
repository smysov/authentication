function writeDataRadioButton(newUser) {
	const radio = document.querySelectorAll('.form__radio');
	radio.forEach(button => {
		if (button.checked) {
			newUser.gender_orientation = button.value;
		}
	});
}

export default writeDataRadioButton;
