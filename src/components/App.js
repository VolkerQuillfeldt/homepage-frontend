import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import UserActivator from './user/UserActivator';
import UserPasswordChange from './user/UserPasswordChange';
import GuestBook from './gb/GuestBook';

class App extends Component {

  constructor() {
    super();

    this.state = {
      id: 0,
      name: "",
      admin: false,
      openGuestBook: false
    }

    this.loginUser = this.loginUser.bind(this);
    this.openGuestBook = this.openGuestBook.bind(this);
  }

  openGuestBook(openGuestBook) {
    this.setState({
      openGuestBook: openGuestBook
    });
  }

  loginUser(id, name, admin) {
    this.setState({
      id: id,
      name: name,
      admin: admin
    })
  }


  render() {

    console.log( "render "+ this.state.openGuestBook + " - " + this.state.name)

    let component = <Main />;
    if (window.location.pathname.includes("openActivate")) {
      let action = window.location.href.substr(window.location.href.indexOf(window.location.pathname));
      component = <UserActivator actionKey={action}></UserActivator>;
    }
    if (window.location.pathname.includes("openChangePassword")) {
      let action = window.location.href.substr(window.location.href.indexOf(window.location.pathname));
      component = < UserPasswordChange actionKey={action} ></UserPasswordChange >;
    }
    if( this.state.openGuestBook){
      component = < GuestBook   name={this.state.name} id={this.state.id}></GuestBook>
    }

    return (
      <div className="container-fluid bg-secondary">
        <Header loginUser={this.loginUser} openGuestBook={this.openGuestBook} />
        {component}
        <Footer />
      </div>
    )
  }
}

export default App;
