import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { UserContext } from '../../App';
import Avatar from '../../common/Avatar/Avatar';
import { follow, getUser, unfollow, me as getMyself } from '../../services/user.service';
import './ProfileHeader.scss';

function ProfileHeader({ username, postNum }) {
	const [user, setUser] = useState({});
	const { user: me, setUser: setMe } = useContext(UserContext);

	const isFollowing = useMemo(() => {
		return me?.following?.includes(user._id)
	}, [user, me]);

	const handleFollow = () => {
		follow(username).then(() => {
			getMyself()
            .then(loggedUser => {
                setMe(loggedUser);
            })
		})
	}

	const handleUnfollow = useCallback(() => {
		unfollow(username).then(() => {
			getMyself()
            .then(loggedUser => {
                setMe(loggedUser);
            })
		});
	}, [username, setMe]);

	useEffect(() => {
		async function initUser() {
			const user = await getUser(username);
			setUser(user);
		}
		initUser();
	}, [username]);

	return (
		<div className="profile__header">
			<div className="profile__avatar"><Avatar image={user.image} size="lg" /></div>
			<div>
				<h2>{user.username}</h2>
				<p>{postNum} posts</p>
				{me.username !== username ? isFollowing 
				? <button onClick={handleUnfollow}>Unfollow</button> 
				: <button onClick={handleFollow}>Follow</button> : null}
			</div>
		</div>
	);
}

export default ProfileHeader;
