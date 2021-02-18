function writeDataInput(input, user) {
  	let obj = {};
		let key = input.name;
		obj[key] = input.value;
		Object.assign(user, obj);
}

export default writeDataInput;