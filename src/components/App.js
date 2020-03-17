import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import UserActivator from './UserActivator';

class App extends Component {

  render() {

    console.log(window.location.href);
    
    if( window.location.pathname.includes("openActivate")){
      let action =  window.location.href.substr(window.location.href.indexOf(window.location.pathname));
      return <UserActivator actionKey= {action}></UserActivator>;
    }
    

    return (
      <div className="container-fluid bg-secondary">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
