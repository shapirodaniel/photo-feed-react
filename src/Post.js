import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Post.css';

export default function Post({ postId }) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const getComments = async () => {
			try {
				if (postId) {
					const { data } = await axios.get(
						`http://localhost:8080/comments?commentId=${postId}`
					);
					setComments(data[0].imgComments);
				}
			} catch (ex) {
				console.error(ex);
			}
		};

		getComments();
	}, [postId]);

	if (!postId) return null;

	return (
		<div style={{ width: '100%', lineHeight: '1.2em' }}>
			{comments.map(({ id, name, comment }) => (
				<div
					key={id}
					className='comments-container'
					style={{
						backgroundColor: id % 2 === 1 ? 'rgb(254,240,255)' : '',
					}}
				>
					<div className='name'>{name}:</div>
					<div className='comment'>{comment}</div>
				</div>
			))}
		</div>
	);
}
