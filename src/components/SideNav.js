import React, { Component } from 'react';
import Continent from './Continent';

class SideNav extends Component {

	constructor() {
		super();

		this.state = {
			myContinents: []
		}
		this.changeBody = this.changeBody.bind(this);

	};


	changeBody(path, page , count ) {
		this.props.changeBody(path, page, count);
	};

	componentDidMount() {
		fetch('/getNavigation')
			.then(response => response.json())
			.then((jsonData) => {
				// jsonData is parsed json object received from url
				this.setState(
					{
						myContinents: jsonData.continents
					}
				);
			})
			.catch((error) => {
				// handle your errors here
				console.error(error)
			});
	}



	render() {

		return (
			<span>
				{this.state.myContinents.map((item, index) => (
					<Continent
						key={index}
						continent={item.continent}
						countries={item.countries}
						changeBody={this.changeBody}
					/>
				))}
			</span>
		)

	};
};

export default SideNav;
