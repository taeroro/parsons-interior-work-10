import React, { Component } from 'react';
import './../../styles/main.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <footer>
     		<div className="main-wrapper">

     			<div className="footer-nav">
     				<div className="footer-section">2015 copyright</div>
     				<div className="footer-section"> <a href="#">Parsons School of Design</a></div>
     				<div className="footer-section"><a href="#">Work 9 Credits</a></div>
     			</div>
     		</div>
     	</footer>
    );
  }
}
