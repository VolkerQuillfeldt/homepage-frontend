import React, { Component } from 'react';
import GuestBookBodyAdd from './GuestBookBodyAdd';
import GuestBookBodyList from './GuestBookBodyList';

class GuestBookBody extends Component {

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

		let component = < GuestBookBodyList id={this.state.id} name={this.state.name} />
		if( this.props.action==="add"){
			component = < GuestBookBodyAdd id={this.state.id} name={this.state.name} />
		}

		return (
			
				<div className="container-fluid">
					{component}
				</div>
			
		)

	};
}

export default GuestBookBody;
