import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feed.css';

export default function Post({ postId }) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const getComments = async () => {
			try {
				const { data: comments } = await axios.get(
					'http://localhost:8080/comments'
				);
				if (postId) {
					setComments(comments);
				}
			} catch (ex) {
				console.error(ex);
			}
		};

		getComments();
	}, [postId]);

	if (!postId) return null;

	const { imgComments } = comments.find(c => c.commentId === postId) || {
		commentId: 0,
		imgComments: [],
	};

	return (
		<div style={{ width: '100%', lineHeight: '1.2em' }}>
			{imgComments.map(({ id, name, comment }) => (
				<div
					key={id}
					style={{
						width: '100%',
						fontSize: '14px',
						display: 'flex',
						justifyContent: 'space-between',
						padding: '1em',
						borderRadius: '10px',
						backgroundColor: id % 2 === 1 ? 'rgb(254,240,255)' : '',
					}}
				>
					<div style={{ display: 'flex-inline', fontWeight: 'bold' }}>
						{name}:
					</div>
					<div
						style={{
							display: 'flex-inline',
							maxWidth: '280px',
							textAlign: 'right',
						}}
					>
						{comment}
					</div>
				</div>
			))}
		</div>
	);
}
