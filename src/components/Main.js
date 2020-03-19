import React, { Component } from 'react';
import SideNav from './SideNav';
import Body from './Body';

class Main extends Component {

	constructor() {
		super();

		this.state = {
			path: '',
			page: 1,
			count: 10,
			bodyChangeIndex: 0
		}

		this.changeBody = this.changeBody.bind(this);
	};


	changeBody(path , page, count ) {
		
		this.setState(
			{
				path:path,
				page:page,
				count:count,
				bodyChangeIndex: this.state.bodyChangeIndex + 1
			}
		)
	}

	render() {

		return (
			<main>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3 col-sm-6 col-xs-7">
						<nav className="navbar navbar-expand-sm navbar-light">
						<button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#Navigation" aria-controls="Navigation" aria-expanded="false" aria-label="Toggle navigation">
    						<span className="navbar-toggler-icon"></span>
  						</button>
  						<div className="collapse navbar-collapse" id="Navigation">
							<SideNav
								changeBody={this.changeBody} />
						</div>
						</nav>
						</div>
						<div className="col-md-9 col-sm-6 col-xs-5">
							<div className="container">

								<Body
									key={this.state.bodyChangeIndex}
									path = {this.state.path}
									page = {this.state.page}
									count = {this.state.count} 
									changeBody={this.changeBody}/>

							</div>
						</div>
					</div>
				</div>
			</main>
		)

	};
}

export default Main;
