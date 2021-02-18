import axios from '../plugins/axios';

/**
 * Function login. Make login request to API
 * @param {String} email
 * @param {String} password
 */

export async function login(email, password) {
	try {
		const response = await axios.post('/auth/login', JSON.stringify({ email, password }));
		console.log(response);
		return response;
	} catch (err) {
		return Promise.reject(err);
	}
}

export async function signup(data) {
	try {
		const response = await axios.post('/auth/signup', JSON.stringify(data));
		console.log(response);
		return response;
	} catch (err) {
		return Promise.reject(err);
	}
}
