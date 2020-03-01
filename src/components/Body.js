import React, { Component } from 'react';
import '../css/Modal.css';
import './StartPage';
import StartPage from './StartPage';
import SpinnerDisplay from './SpinnerDisplay';

class Body extends Component {

	constructor() {
		super();

		this.state = {
			myPictures: null,
			pictureStartIndex: 0,
			pictureEndIndex: 0,
			maxPage: 0
		}

		this.changeBody = this.changeBody.bind(this);
	};

	changeBody(e, path, page, count) {
		e.preventDefault();	
		let curPage = page;
		if (page === "Next") {
			curPage = 1 + parseInt(this.props.page);
		} else if (page === "Previous") {
			curPage =  parseInt(this.props.page) - 1;
		}
		
		this.props.changeBody(path, curPage, count);
	};

	componentDidMount() {
		if (this.props.path !== '') {
			fetch('/getPictures?count=' + this.props.count + '&page=' + this.props.page + '&path=' + this.props.path)
				.then(response => response.json())
				.then((jsonData) => {
					// jsonData is parsed json object received from url
					this.setState(
						{
							myPictures: jsonData.pictures,
							pictureStartIndex: jsonData.pictureStartIndex,
							pictureEndIndex: jsonData.pictureEndIndex,
							maxPage: jsonData.maxPage
						}
					);
				})
				.catch((error) => {
					// handle your errors here
					console.error(error)
				});
				window.scrollTo(0, 0);
		}
	}

	render() {

		if (this.props.path ==='') {
			return <StartPage key="0" />
		}

		if( this.state.myPictures === null){
			//fetch ist ein Promise, deshalb läuft der Code leer weiter, 
			//render wird dann nochmal durch setState aufgerufen !
			return <SpinnerDisplay />;
		}

		const hallo = <div className="col-md-8 col-sm-4 col-xs-2"><h4 className="py-1">Bilder {this.state.pictureStartIndex}-{this.state.pictureEndIndex}</h4></div>;

		var countDropDown = [];
		if (this.props.count === 6) {
			countDropDown.push(<span key="1" className="dropdown-item active" >6</span>);
		} else {
			countDropDown.push(<span key="1a"className="dropdown-item"  onClick={e => this.changeBody(e, this.props.path, 1, 6)}>6</span>);
		}
		if (this.props.count === 12) {
			countDropDown.push(<span key="10" className="dropdown-item active" >12</span>);
		} else {
			countDropDown.push(<span key="10a"className="dropdown-item"  onClick={e => this.changeBody(e, this.props.path, 1, 12)}>12</span>);
		}
		if (this.props.count === 24) {
			countDropDown.push(<span key="25" className="dropdown-item active" >24</span>);
		} else {
			countDropDown.push(<span key="25a" className="dropdown-item"  onClick={e => this.changeBody(e, this.props.path, 1, 24)}>24</span>);
		}
		if (this.props.count === 48) {
			countDropDown.push(<span key="50" className="dropdown-item active" >48</span>);
		} else {
			countDropDown.push(<span key="50a" className="dropdown-item"  onClick={e => this.changeBody(e, this.props.path, 1, 48)}>48</span>);
		}
		if (this.props.count === 96) {
			countDropDown.push(<span key="100" className="dropdown-item active" href="#" >96</span>);
		} else {
			countDropDown.push(<span key="100a" className="dropdown-item"  onClick={e => this.changeBody(e, this.props.path, 1, 96)}>96</span>);
		}

		var countDropDownComplete = <div className="col-md-4 col-sm-8 col-xs-10 text-right"><div className="dropdown  py-1">
			<button className="btn btn-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Anzahl der Bilder
  					</button>
			<div className="dropdown-menu  dropdown-menu-right">{countDropDown}</div></div></div>;



		var nav = [];

		if (parseInt(this.props.page) === 1) {
			nav.push(<li key="prev" className="page-item disabled">
				<span className="page-link" href="#" aria-label="Previous">
				<span aria-hidden="true">&laquo;</span>
				<span className="sr-only">Previous</span>
			</span></li>)
		} else {
			nav.push(<li key="preva" className="page-item">
				<span className="page-link" href="#" onClick={e => this.changeBody(e, this.props.path, 'Previous', this.props.count)} aria-label="Previous">
				<span aria-hidden="true">&laquo;</span>
				<span className="sr-only">Previous</span>
			</span></li>)
		}

		var curPage = parseInt(this.props.page);
		var curMaxPage = parseInt(this.state.maxPage);
		var addedEmpty = false;
		let emptyRow = <li className="page-item"><span className="page-link">&middot;</span></li>

		for (var i = 1; i <= curMaxPage; i++) {
			if (i !== parseInt(this.props.page)) {
				let row = <li  key={i} className="page-item"><span className="page-link" href="#" id={i} onClick={e => this.changeBody(e, this.props.path, e.target.id, this.props.count)}>{i}</span></li>
				if (curMaxPage <= 10) {
					nav.push(row);
				} else {
					if (i <= 2 || ((i >= curPage - 1) && (i <= curPage + 1)) || (i >= (curMaxPage - 1))) {
						nav.push(row);
						addedEmpty = false;
					} else {
						if (!addedEmpty) {
							nav.push(emptyRow);
							nav.push(emptyRow);
							addedEmpty = true;
						}
					}
				}
			} else {
				nav.push(<li key={i} className="page-item  active"><span className="page-link" href="#">{i}<span className="sr-only">(current)</span></span></li>)
			}

		}

		if (parseInt(this.props.page) === curMaxPage) {
			nav.push(<li className="page-item disabled"><span className="page-link" href="#" aria-label="Next">
				<span aria-hidden="true">&raquo;</span>
				<span className="sr-only">Next</span>
			</span></li>)
		} else {
			nav.push(<li className="page-item"><span className="page-link" href="#" onClick={e => this.changeBody(e, this.props.path, 'Next', this.props.count)} aria-label="Previous">
				<span aria-hidden="true">&raquo;</span>
				<span className="sr-only">Next</span>
			</span></li>)
		}

		let imageClass= "col-md-4 col-sm-6 col-xs-12";
		if( parseInt(this.props.count) ===1){
			imageClass= "col-md-12 col-sm-12 col-xs-12"
		}

		return (
				<div className="bg-white">
				<div className="row">
					{hallo}{countDropDownComplete}
					<div className="col-md-12 col-sm12 col-xs-12"><h4>Zum vergrößern auf das Bild klicken.</h4></div>
					{this.state.myPictures.map((item, index) => (
						<div key={index} className={imageClass}>
							<div className="card">
								<span role="button" data-target={'#e' + index} data-toggle="modal">
									<img alt="" className="card-img-top" src={'data:image/png;base64, ' + item}></img>
								</span>
							</div>
						</div>
					))}
					{this.state.myPictures.map((item, index) => (
						<div key={index} className="modal fade bd-example-modal-lg" id={"e" + index} role="dialog">
							<div className="modal-dialog modal-lg modal-sm  modal-dialog-centered" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<img alt="" className="img-fluid modal-img" src={'data:image/png;base64, ' + item}></img>
									</div>
								</div>

							</div>
						</div>
					))}
				</div>
				<div className="d-flex justify-content-center py-3">
					<nav aria-label="...">
						<ul className="pagination">
							{nav}
						</ul>
					</nav>

				</div>
			</div>
		)

	};
};

export default Body;
