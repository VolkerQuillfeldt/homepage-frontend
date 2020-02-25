import React, { Component } from 'react';

class Header extends Component {

	render() {

		return (
			<header>
				<div className="container-fluidcontainer py-3 text-center">
					<div className="row">
						<div className="col-sm-1">
							<div className="container-fluidcontainer py-3">
								<div>
									<button className="btn btn-success" type="button" data-target="#techstack" data-toggle="modal">
										tech stack
				                     </button>
								</div>
								<div className="modal fade bd-example-modal-sm" id="techstack" role="dialog">
									<div className="modal-dialog modal-lg modal-sm modal-dialog-centered" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body text-center">
												<h4 >Frontend</h4>
												<div className="container-fluidcontainer py-3 text-left">
												<div className="row">
												<div className="col-sm-4">
												Bootstrap
												</div>
												<div className="col-sm-8">
												<a href="https://getbootstrap.com/">
												<span className="text-secondary">https://getbootstrap.com
												</span></a>
												</div>
												</div>
												<div className="row">
												<div className="col-sm-4">
												React
												</div>
												<div className="col-sm-8">
												<a href="https://reactjs.org//">
												<span className="text-secondary">https://reactjs.org/
												</span></a>
												</div>
												</div>
												<hr claseName="text-secondary" />
												<div className="text-center">
												<h4>Backend</h4>
												</div>
												<div className="row">
												<div className="col-sm-4">
												Spring Boot 2 (Java 8)
												</div>
												<div className="col-sm-8">
												<a href="https://spring.io/projects/spring-boot">
												<span className="text-secondary">https://spring.io/projects/spring-boot
												</span></a>
												</div>
												</div>
												<div className="text-center">
												<hr claseName="text-secondary" />
												<h4>Runtime</h4>
												</div>
												<div className="row">
												<div className="col-sm-4">
												NGINX Open Source als Reverse Proxy
												</div>
												<div className="col-sm-8">
												<a href="https://www.nginx.com/">
												<span className="text-secondary">https://www.nginx.com/
												</span></a>
												</div>
												</div>
												<div className="row">
												<div className="col-sm-4">
												docker
												</div>
												<div className="col-sm-8">
												<a href="https://www.docker.com/">
												<span className="text-secondary">https://www.docker.com/
												</span></a>
												</div>
												</div>
											</div></div>
										</div>

									</div>
								</div>
							</div>

						</div>
						<div className="col-sm-11">
							<h2 className="text-white">Volkers Reisebilder</h2>
						</div>
					</div>
				</div>
			</header>
		)

	};
};

export default Header;
