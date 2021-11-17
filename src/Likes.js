import React from 'react';

export default function Likes({ likes }) {
	return (
		<div
			style={{
				height: '20px',
				width: '200px',
				margin: '0 auto',
				objectFit: 'contain',
				marginBottom: '1em',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',
			}}
		>
			<span style={{ fontSize: '10px' }}>{likes}</span>
			<img
				src='./assets/heart.png'
				alt='likes'
				style={{
					height: '18px',
					width: 'auto',
					margin: '.1em',
					marginTop: '.28em',
				}}
			/>
		</div>
	);
}
