import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getOne } from '../services/post.service';
import config from '../config';
import './PostPage.scss';

function PostPage() {
	const { id } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		getOne(id)
			.then(data => setPost(data))
			.catch(console.log);
	}, [id]);

	return (
		<div className="PostPage">
			{post && <div>
				<img src={config.apiUrl + '/' + post.image} />
				<div>
					<strong>{post.author.username}</strong>
				</div>
				<p>{post.body}</p>
			</div>}
			<div className="PostPage__comments">
				<h3>Comments</h3>
			</div>
		</div>
	);
}

export default PostPage;