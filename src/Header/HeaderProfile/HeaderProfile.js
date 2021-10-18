import React, {useContext} from 'react';
import './HeaderProfile.scss';
import Avatar from '../../common/Avatar/Avatar';
import { UserContext } from '../../App';

function HeaderProfile() {
	const { user } = useContext(UserContext);

	return (
		<div>
			<Avatar image="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
			{ user.username }
		</div>
	);
}

export default HeaderProfile;