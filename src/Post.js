import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feed.css';

export default function Post({ showId }) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const getComments = async () => {
			const { data: comments } = await axios.get(
				'http://localhost:8080/comments'
			);
			if (showId) {
				setComments(comments);
			}
		};

		getComments();
	}, [showId]);

	if (!showId) return null;

	const { imgComments } = comments.find(c => c.commentId === showId) || {
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
					}}
				>
					<div style={{ display: 'flex-inline', fontWeight: 'bold' }}>
						{name}:
					</div>
					<div style={{ display: 'flex-inline', maxWidth: '280px' }}>
						{comment}
					</div>
				</div>
			))}
		</div>
	);
}
