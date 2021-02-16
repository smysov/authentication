import API_ENV from '../config/api.config';

async function login(email, password) {
	try {
		const response = await fetch(`${API_ENV.apiUrl}/auth/login`, {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-type': 'application/json',
			},
		});
		const data = response.json();
		return data;
	} catch (error) {
		console.log(error);
		Promise.reject(error);
	}
}

export default login;
