
import config from '../config/index';

async function register(user) {
	const res = await fetch(config.apiUrl + '/user', {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return res.json();
}

export { register };