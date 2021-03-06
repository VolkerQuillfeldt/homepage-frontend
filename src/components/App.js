import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import UserActivator from './user/UserActivator';
import UserPasswordChange from './user/UserPasswordChange';
import GuestBook from './gb/GuestBook';
import { BrowserRouter, Switch, Route } from "react-router-dom";

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

    const queryString = window.location.search;
    const query = 'actionKey=';
    let pos = queryString.indexOf(query) + query.length;
    let actionKey = queryString.substr(pos)

    let component = <Main />;
    if (this.state.openGuestBook) {
      component = < GuestBook name={this.state.name} id={this.state.id}></GuestBook>
    }

    return (
      <div className="container-fluid bg-secondary">
        <BrowserRouter>
          <Switch>
            <Route path="/openActivate"><Header home={window.location.hostname} /><UserActivator actionKey={actionKey} ></UserActivator></Route>
            <Route path="/openChangePassword"><Header home={window.location.hostname} />< UserPasswordChange actionKey={actionKey}></UserPasswordChange >;</Route>
            <Route path="/"><Header loginUser={this.loginUser} openGuestBook={this.openGuestBook} home=""/>{component}</Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App;
