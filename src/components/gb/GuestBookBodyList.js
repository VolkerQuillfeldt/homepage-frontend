import React, { Component } from 'react';

class GuestBookBodyList extends Component {

	constructor() {
		super();

		this.state = {
			id: 0,
			name: ""
		}
	};

	componentDidMount() {
		this.setState(
			{
				id: this.props.id,
				name: this.props.name
			}
		)
	}


	render() {

		return (
			
				<div className="container-fluid">
					List
					{this.props.id}
					{this.props.name}
				</div>
			
		)

	};
}

export default GuestBookBodyList;
