import React from 'react';

function PostDate({date}) {
	const dateObj = new Date(date);
	const formatted = dateObj.getDate() + '.' + dateObj.getMonth();

	return (
		<div>{ formatted }</div>
	);
}

export default PostDate;