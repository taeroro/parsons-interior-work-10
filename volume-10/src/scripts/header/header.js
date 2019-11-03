import React, { Component } from 'react';
import './../../styles/main.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <nav>
        <div className="sticky-background"></div>

        <div className="menu-panel">
          <div className="menu-controls">
            Menu
          </div>

          <div className="menu-content">
            <div className="menu-grid">

              <div className="menu-item"><a href="">Introduction</a></div>
              <div className="menu-item"><a href="">Ornament and the Mind</a></div>
              <div className="menu-item"><a href="">Past Issues</a></div>
              <div className="menu-item"><a href="">Faculty Directory</a></div>


              <div className="menu-item">
                <a href="">Design Work</a>
                <a className="arrow-in" href="#"></a>
              </div>
              <div className="menu-item"><a href="">Featured Faculty</a></div>
              <div className="menu-item">
                <a href="">Featured Alumna</a>
                <a className="arrow-in" href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
