import React from 'react';
import CreateContent from './CreateContent';
import PostList from './PostList'

function App() {
	return (
		<div className="container">
			<h1>Create Post</h1>
			<CreateContent contentType="title" url='http://localhost:4000/posts' label='Title' />
			<hr />
			<h1>Posts</h1>
			<PostList />
		</div>
	);
}

export default App;