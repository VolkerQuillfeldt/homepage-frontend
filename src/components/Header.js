import React, { Component } from 'react';
import TechStack from './TechStack';
import Login from './user/Login';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';

class Header extends Component {

	constructor() {
		super();

		this.state = {
			id: 0,
			name: "",
			admin: false
		}

		this.loginUser = this.loginUser.bind(this);
		this.openGuestBook = this.openGuestBook.bind(this);
	}

	loginUser(id, name, admin) {

		this.setState({
			id: id,
			name: name,
			admin: admin
		})
		this.props.loginUser(id, name, admin);
	}

	openGuestBook(open) {
		this.props.openGuestBook(open);
	}

	home(e) {
		window.location.href = "/"
	}



	render() {

		let gbComponent =
			<button className="btn btn-light" type="button" onClick={e => this.openGuestBook(true)}>
				<FaBook /><br />Guestbook {this.state.name}
			</button>;
		if (this.state.id <= 0) {
			gbComponent = <button className="btn btn-outline-light" type="button">
				<FaBook /><br />Guestbook login only
			</button>;
		}

		return (
			<header>
				<div className="container-fluidcontainer py-3 text-center">
					<div className="row">
						<div className="col-sm-1">
							<div className="container-fluidcontainer py-3">
								<div>
									<button className="btn btn-light" type="button" onClick={e => this.openGuestBook(false)}>
										<FaHome /> Home
				                     </button>
								</div>
							</div>
						</div>
						<div className="col-sm-1">
							<div className="container-fluidcontainer py-3">
								<div>
									<button className="btn btn-success" type="button" data-target="#techstack" data-toggle="modal">
										tech stack
				                     </button>
								</div>
								<TechStack />
							</div>
						</div>
						<div className="col-sm-7">
							<h2 className="text-white">Volkers Reisebilder</h2>
						</div>
						<div className="col-sm-2">
							<div className="container-fluidcontainer py-3">
								<div>
									{gbComponent}
								</div>
							</div>
						</div>
						<div className="col-sm-1">
							<div className="container-fluidcontainer py-3">
								<div>
									<button className="btn btn-light" type="button" data-target="#login" data-toggle="modal">
										<FaUser /> Login
				                     </button>
									<Login loginUser={this.loginUser} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		)

	};
}

export default Header;
