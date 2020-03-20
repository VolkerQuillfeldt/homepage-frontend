import React, { Component } from 'react';
import JoditEditor from "jodit-react";


class GuestBookBodyAdd extends Component {

	constructor() {
		super();

		this.state = {
			id: 0,
			name: "",
			content: 'content',
		} 
	};

	contentHTML = null;

	updateContent(value) {
		this.contentHTML=value;
	}

	componentDidMount() {
		this.setState(
			{
				id: this.props.id,
				name: this.props.name
			}
		)
	}

	saveEntry() {
		

		let loginURL = '/addEntryGuestBook';
	
		fetch(loginURL, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			referrerPolicy: 'no-referrer', // no-referrer, *client
			body: JSON.stringify({
				 				userId:this.props.id,
								userName:this.props.name,
								content:this.contentHTML
			})
		})
			.then(response => response.json())
			.then((jsonData) => {
				console.log(jsonData);
				// jsonData is parsed json object received from url
				if (jsonData.id < 0) {
					this.setState(
						{
							messageId: jsonData.id,
							messageText: jsonData.message
						}
					);
				} else {
					this.props.loginUser(jsonData.id,jsonData.userName, jsonData.admin);
				}
			})
			.catch((error) => {
				// handle your errors here
				console.error(error)
			});

	}


	render() {

		let buttonClassName = "btn btn-primary";

		return (

			<div className="container-fluid">
				<JoditEditor
					value={this.state.content}
					config={{
						readonly: false // all options from https://xdsoft.net/jodit/play.html
					}}
					onChange={e => this.updateContent(this)}
				/>

				<div>
					<button type="button" onClick={e => this.saveEntry()} className={buttonClassName}>Save</button>
				</div>
				<div className="py-1"></div>
			</div>
		)

	};
}

export default GuestBookBodyAdd;
