import UI from '../config/ui.config'

function writDataBirthday(newUser) {
	const { birthday } = UI;
	const [
		date_of_birth_year,
		date_of_birth_month,
		date_of_birth_day,
	] = birthday.value.split('-');

	newUser.date_of_birth_day = date_of_birth_day;
	newUser.date_of_birth_month = date_of_birth_month;
	newUser.date_of_birth_year = date_of_birth_year;
}

export default writDataBirthday;
