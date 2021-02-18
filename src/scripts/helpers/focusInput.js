import { removeInputError } from "../views/form";

function removeValidationError(inputs) {
	inputs.forEach(input => input.addEventListener('focus', () => removeInputError(input)));
}

export default removeValidationError;