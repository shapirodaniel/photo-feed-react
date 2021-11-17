import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feed.css';
import Post from './Post';
import Likes from './Likes';

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
			setVisiblePosts(idObj);
		};

		getPosts();
	}, []);

	return (
		<section>
			{posts.map(({ postId, date, author, src, content, likes }) => (
				<div key={postId} className='container'>
					<div className='author-and-date'>
						<span>{date}</span>
						<span>posted by: {author}</span>
					</div>
					<img src={src} alt='nature-and-water' />
					<Likes likes={likes} />
					<div>{content}</div>
					<button
						style={{
							height: '40px',
							width: '200px',
							border: 'transparent',
							borderRadius: '30px',
							backgroundColor: '#700070',
							color: 'white',
							fontSize: '16px',
							fontWeight: 'bold',
							cursor: 'pointer',
						}}
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
						{visiblePosts[postId] ? 'Hide Comments' : 'View Comments'}
					</button>
					{visiblePosts[postId] && <Post postId={postId} />}
				</div>
			))}
		</section>
	);
}

export default Feed;
