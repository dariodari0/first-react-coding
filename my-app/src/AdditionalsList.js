import React, {Component} from 'react';

class AdditionalsList extends Component {
		render(){
		const additionals = ['JSX - Babel', 'Redux', 'Router', 'User Authentication'];
		const liStyle = {fontSize: '1.5em', listStyleType: 'disc'}; 
	      return (
			<ul>
				{additionals.map((text,i) => {
				  return <li key={i} style={liStyle}>{text}</li>
			})}
			</ul>
		  );
		}
	}

export default AdditionalsList;