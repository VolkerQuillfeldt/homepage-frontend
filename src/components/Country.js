import React, { Component } from 'react';

class Country extends Component {

	constructor() {
		super();

		this.state = {
			myTravels: [],
		}

	};

	componentDidMount() {

		const travels = this.props.travels.map(item => {
			return item;
		}
		)

		this.setState(
			{
				myTravels: travels
			}
		);
	}


	render() {
		
		return (
			<span className="text-white" >
				<h5 className="py-2">{this.props.country}</h5>
				{this.state.myTravels.map((item,index) => (
					<p key={index}><button type="button" className="btn btn-warning btn-sm" href='#' onClick={e => this.props.changeBody(item.path,1,6)}>{item.travel}</button></p>
				))
				}
			</span>
		)

	};
};

export default Country;
