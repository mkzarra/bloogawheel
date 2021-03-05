import React, { useState } from 'react';
import axios from 'axios';

function CreateContent(props) {
	console.log(props);
	const [userInput, setUserInput] = useState('');
	let path = '';

	if (props.postId) {
		path = `/${props.postId}/comments`;
	}

	console.log(props.url + path);

	const handleSubmit = async function (event) {
		event.preventDefault();

		await axios.post(props.url + path, {
			[props.contentType]: userInput
		});

		setUserInput('');
	}

	return (
		<div>
			<form onSubmit={(event) => handleSubmit(event)}>
				<div className="form-group">
					<label>{props.label}</label>
					<input value={userInput} onChange={(event) => setUserInput(event.target.value)} className="form-control" />
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
}

export default CreateContent;