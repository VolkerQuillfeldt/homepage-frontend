import React, { Component } from 'react';
import Country from './Country';

class Continent extends Component {

	constructor() {
		super();

		this.state = {
			myCountries: [],
		}
		this.changeBody = this.changeBody.bind(this);

	};

	changeBody(path , page , count){
		this.props.changeBody(path, page , count);
	};

	componentDidMount() {

		const countries = this.props.countries.map(item => {
			return item;
		}
		)

		this.setState(
			{
				myCountries: countries
			}
		);
	}


	render() {



		return (
			<span className="text-white" >
				<h3>{this.props.continent}</h3>
				{this.state.myCountries.map((item,index) => (
					<Country 
					key={index} 
					country = {item.country}
					travels = {item.travels}
					changeBody= {this.changeBody}
					/>
				))
				}
			</span>
		)

	};
};

export default Continent;
