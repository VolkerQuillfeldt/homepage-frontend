import React, { Component } from 'react';
import $ from 'jquery';
import { GoTriangleDown } from 'react-icons/go';
import { GoTriangleRight } from 'react-icons/go';

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

		let countryname = this.props.country.replace(/\s/g, '');
		let hashname = "#collapse" +countryname;
		let divname = "collapse" + countryname;
		let plusname = "pluscollapse" + countryname;
		let minusname = "minuscollapse" +countryname;
		
		$("#collapse" + countryname).on('hidden.bs.collapse', function (e) {
			$('#plus' + e.currentTarget.id).removeClass("d-none");
			$('#minus' + e.currentTarget.id).addClass("d-none");
			e.stopPropagation();
		})
		$("#collapse" + countryname).on('shown.bs.collapse', function (e) {
			$('#minus' + e.currentTarget.id).removeClass("d-none");
			$('#plus' + e.currentTarget.id).addClass("d-none");
			e.stopPropagation();
		})


		return (
			<span className="text-white" >
			<a className="text-white border-0" data-toggle="collapse" href={hashname} role="button"  aria-expanded="false" aria-controls={divname}>
					<h5 className="px-3 py-2"><GoTriangleDown  id={minusname} className="d-none" />
					<GoTriangleRight  id={plusname} />
					{this.props.country}</h5>
				</a>
				<div className="collapse px-4" id={divname} aria-expanded="false">
				
				{this.state.myTravels.map((item,index) => (
					<p key={index}><button type="button" className="btn btn-warning btn-sm" href='#' onClick={e => this.props.changeBody(item.path,1,6)}>{item.travel}</button></p>
				))
				}
				</div>
				</span>
		)

	};
}

export default Country;
