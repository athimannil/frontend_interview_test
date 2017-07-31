import './Properties.css';

import React from 'react';
import { PropertyTicket } from './propertyticket/PropertyTicket'

export class Properties extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			propertyItems: ''
		};
	}

	componentWillMount () {
		// requestProperties();
		fetch('v1/advertisements')
			.then((response) => response.json())
			.then((responseJson) => {
				// console.log(responseJson.data);
				this.setState({
					propertyItems: responseJson.data.slice(0, 10)
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<main>
				<div className="container">
					{ this.state.propertyItems.length
						? <PropertyTicket propertyitems={this.state.propertyItems}/>
						: <p>Loading...</p>
					}
				</div>
			</main>
		);
	}
}
