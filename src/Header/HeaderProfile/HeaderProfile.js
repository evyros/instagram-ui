import React, {useContext} from 'react';
import './HeaderProfile.scss';
import Avatar from '../../common/Avatar/Avatar';
import { UserContext } from '../../App';

function HeaderProfile() {
	const { user } = useContext(UserContext);

	return (
		<div className="HeaderProfile">
			<Avatar image="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
			<span className="HeaderProfile__username">{ user.username }</span>
		</div>
	);
}

export default HeaderProfile;