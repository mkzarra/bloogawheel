import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateContent from './CreateContent';
import CommentList from './CommentsList';

function PostList() {
	const [posts, setPosts] = useState({});

	async function fetchPosts() {
		const res = await axios.get('http://localhost:4002/posts');
		console.log(res.data)
		setPosts(res.data);
	}

	useEffect(() => {
		fetchPosts();
	}, []);

	const renderedPosts = Object.values(posts).map(post => (
		<div key={post.id} className="card" style={{ width: '30%', marginBottom: '20px' }}>
			<div className="card-body">
				<h3>{post.title}</h3>
				<CommentList comments={post.comments} />
				<CreateContent postId={post.id} url="http://localhost:4001/posts" contentType="content" label="New Comment" />
			</div>
		</div>
	));

	return (
		<div className="d-flex flex-row flex-wrap justify-content-between">
			{renderedPosts}
		</div>
	);
}

export default PostList;