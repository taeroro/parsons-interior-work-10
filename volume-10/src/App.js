import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router-dom';

import Header from './scripts/header/header';
import Routes from './scripts/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header {...this.props} />
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
