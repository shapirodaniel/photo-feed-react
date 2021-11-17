import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feed.css';
import Post from './Post';
import Likes from './Likes';

function Feed() {
	const [posts, setPosts] = useState([]);
	const [visibleComments, setVisibleComments] = useState({});

	useEffect(() => {
		const getPosts = async () => {
			try {
				const { data: posts } = await axios.get('http://localhost:8080/posts');

				setPosts(posts);

				const idObj = posts
					.map(({ postId }) => postId)
					.reduce((ht, val) => {
						ht[val] = false;
						return ht;
					}, {});

				setVisibleComments(idObj);
			} catch (ex) {
				console.error(ex);
			}
		};

		getPosts();
	}, []);

	return (
		<section>
			{posts.map(({ postId, date, author, src, content, likes }) => (
				<div key={postId} className='container'>
					<div className='author-and-date'>
						<span>{date}</span>
						<span>|</span>
						<span className='author'>{author}</span>
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
							if (visibleComments[postId]) {
								const clonedPosts = { ...visibleComments };
								delete clonedPosts[postId];
								setVisibleComments(clonedPosts);
							} else {
								setVisibleComments({ ...visibleComments, [postId]: true });
							}
						}}
					>
						{visibleComments[postId] ? 'Hide Comments' : 'View Comments'}
					</button>
					{visibleComments[postId] && <Post postId={postId} />}
				</div>
			))}
		</section>
	);
}

export default Feed;
