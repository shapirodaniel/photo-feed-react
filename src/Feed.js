import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feed.css';

function Post({ showId }) {
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
		<div>
			{imgComments.map(({ id, name, comment }) => (
				<div
					key={id}
					style={{
						width: '100%',
						fontSize: '14px',
						display: 'flex',
						'justify-content': 'space-between',
					}}
				>
					<span style={{ fontWeight: 'bold' }}>{name}:</span> {comment}
				</div>
			))}
		</div>
	);
}

function Feed() {
	const [posts, setPosts] = useState([]);
	const [visiblePosts, setVisiblePosts] = useState({});

	useEffect(() => {
		const getPosts = async () => {
			const { data: posts } = await axios.get('http://localhost:8080/posts');
			setPosts(posts);
			const postIds = posts.map(({ postId }) => postId);
			const idObj = postIds.reduce((ht, val) => {
				ht[val] = false;
				return ht;
			}, {});
			setVisiblePosts({ ...idObj });
		};

		getPosts();
	}, []);

	return (
		<section>
			{posts.map(({ postId, date, author, src, content }) => (
				<div key={postId} className='container'>
					<div className='author-and-date'>
						<span>{date}</span>
						<span>posted by: {author}</span>
					</div>
					<img src={src} alt='nature-and-water' />
					<div>{content}</div>
					<button
						onClick={() => {
							if (visiblePosts[postId]) {
								const clonedPosts = { ...visiblePosts };
								delete clonedPosts[postId];
								setVisiblePosts(clonedPosts);
							} else {
								setVisiblePosts({ ...visiblePosts, [postId]: true });
							}
						}}
					>
						View Comments
					</button>
					{visiblePosts[postId] && <Post showId={postId} />}
				</div>
			))}
		</section>
	);
}

export default Feed;
