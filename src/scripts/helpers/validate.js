const regExpDic = {
	email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
	password: /^[0-9a-zA-Z]{4,}$/,
	phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
};

/**
 * Function validate. Check Input on RegExp provided in regExpDictionary by input data-required type
 * @param {HTMLInputElement} element
 * @returns {Boolean} - Return true if input valid or doesn't has data-required attr
 */

export function validate(element) {
	const regExpName = element.dataset.required;
	if (!regExpDic[regExpName]) return true;
	return regExpDic[regExpName].test(element.value);
}
