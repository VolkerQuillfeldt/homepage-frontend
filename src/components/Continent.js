import React, { Component } from 'react';
import Country from './Country';
import $ from 'jquery';
import { GoTriangleDown } from 'react-icons/go';
import { GoTriangleRight } from 'react-icons/go';

class Continent extends Component {

	constructor() {
		super();

		this.state = {
			myCountries: []
		}

		this.changeBody = this.changeBody.bind(this);
	};

	changeBody(path, page, count) {
		this.props.changeBody(path, page, count);
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
	};

	render() {
		

		let hashname = "#collapse" + this.props.continent;
		let divname = "collapse" + this.props.continent;
		let plusname = "pluscollapse" + this.props.continent;
		let minusname = "minuscollapse" + this.props.continent;
		
		$("#collapse" + this.props.continent).on('hidden.bs.collapse', function (e) {
			$('#plus' + e.currentTarget.id).removeClass("d-none");
			$('#minus' + e.currentTarget.id).addClass("d-none");
			
		})
		$("#collapse" + this.props.continent).on('shown.bs.collapse', function (e) {
			$('#minus' + e.currentTarget.id).removeClass("d-none");
			$('#plus' + e.currentTarget.id).addClass("d-none");
		})
		
		return (

			<span>
				<a className="text-white border-0" data-toggle="collapse" href={hashname} role="button"  aria-expanded="false" aria-controls={divname}>
					<h3><GoTriangleDown  id={minusname} className="d-none" />
					<GoTriangleRight  id={plusname} />
					{this.props.continent}</h3>
				</a>
				<div className="collapse" id={divname} aria-expanded="false">
					{this.state.myCountries.map((item, index) => (
						<Country
							key={index}
							country={item.country}
							travels={item.travels}
							changeBody={this.changeBody}
						/>
					))
					}
				</div>
				<br />
			</span>
		)

	};
};

export default Continent;
