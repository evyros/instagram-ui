
import * as yup from 'yup';

export const postScheme = yup.object().shape({
	body: yup.string()
		.required(),
});