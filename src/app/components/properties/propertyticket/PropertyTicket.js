import React from 'react';

export class PropertyTicket extends React.Component {
	render() {
		const PropertyTidyList = this.props.propertyitems.map(
			({
				_id,
				title,
				advertisementAssets,
				advertisementPrice,
				userWishes,
				realestateSummary,
				purpose
			}) =>
				Object.assign(
					{ _id, title, advertisementPrice, realestateSummary, userWishes, purpose },
					Object(Object.values(advertisementAssets).find(m => m.titlePicture))
						.advertisementThumbnails
				)
		);

		const property = PropertyTidyList.map(propertyDetail => {
			return (
				<article className='property' key={propertyDetail._id.$id}>
					<figure className='property-image'>
						<img src={propertyDetail.inventory_m.url} alt='dsdsd' />
						<figcaption className='property-image-title'>
							{ propertyDetail.purpose === 0 ? 'Kaufen' : 'Mieten'}
						</figcaption>
					</figure>
					<div
						className={
							'property-detail ' +
							(propertyDetail.userWishes.visibleAddress
								? 'show-address'
								: 'no-address')
						}
					>
						<h5 className='property-detail-title'>{propertyDetail.title}</h5>
						{propertyDetail.userWishes.visibleAddress
							? <h6 className='property-detail-address'>
								<span>
									{propertyDetail.realestateSummary.address.postalCode}
								</span>
								{' '}{' '}
								<span>{propertyDetail.realestateSummary.address.city}</span>
								{' '}{' '} / {' '}
								<span>{propertyDetail.realestateSummary.address.street}</span>
							</h6>
							: null}
						<div className='property-detail-size'>
							<div className='property-detail-amount'>
								{Intl.NumberFormat('de-DE').format(propertyDetail.advertisementPrice.baseRent)} €
							</div>
							<div className='property-detail-room'>
								{propertyDetail.realestateSummary.numberOfRooms} Zimmer
							</div>
							<div className='property-detail-space'>
								{propertyDetail.realestateSummary.space.toFixed(0)} m²
							</div>
						</div>
					</div>
				</article>
			);
		});

		return (
			<div className='list'>
				{property}
			</div>
		);
	}
}
