import './Properties.css';

import React from 'react';

export class Properties extends React.Component {
	render() {
		return (
			<main>
				<div className="container">
					<div className="list">
						<article className="property">
							<figure className="property-image">
								<img src="http://via.placeholder.com/500x300" />
								<figcaption className="property-image-title">mage title</figcaption>
							</figure>
							<div className="property-detail">
								<h3 className="property-detail-title">property title</h3>
								<h6 className="property-detail-address">Property address</h6>
								<div className="property-detail-size">
									<div className="property-detail-amount">110.00¢</div>
									<div className="property-detail-room">3 Zimmer</div>
									<div className="property-detail-space">ab 35m²</div>
								</div>
							</div>
						</article>

					</div>
				</div>
			</main>
		);
	}
}
