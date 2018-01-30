import React, { Component } from 'react';
import './Logo.css';
import logo from './logo.svg';
import AdditionalsList from './AdditionalsList';

class Logo extends Component {
		render() {
		  return (
			<div className="card"> 
				<h2 className="name">ReactJS</h2>
				<img src={logo} className="Logo-logo"
				     alt="logo react"/>
				<h3 style={{fontSize: '2em', margin: '2px'}}> Additionals: </h3> 
				<AdditionalsList />	
			</div>
		  );
 		}
	}
	
export default Logo;