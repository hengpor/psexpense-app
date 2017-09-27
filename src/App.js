import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand">PS Expense Management</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active">Link <span className="sr-only">(current)</span></li>
        <li>Link</li>
        <li className="dropdown">
          <ul className="dropdown-menu">
            <li>Action</li>
            <li>Another action</li>
            <li>Something else here</li>
            <li role="separator" className="divider"></li>
            <li>Separated link</li>
            <li role="separator" className="divider"></li>
            <li>One more separated link</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
}

export default App;
