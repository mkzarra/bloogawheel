import React from 'react';

function CommentList({ comments }) {
	const renderedComments = comments.map(comment => {
		console.log(comment.content);
		const contentObj = {
			'rejected': 'This comment has been rejected',
			'pending': 'This comment is awaiting moderation',
			'approved': comment.content
		}

		return <li key={comment.id}>{contentObj[comment.status]}</li>
	});

	console.log(renderedComments);
	return (
		<ul>
			{renderedComments}
		</ul>
	);
}

export default CommentList;