import React, { Component } from 'react';

export default class CharacterDetails extends Component {
	render() {
		console.log('character details:', this.props.location.state.characterDetails);
		const characterDetails = this.props.location.state && this.props.location.state.characterDetails;
		return (
			<div className="character-details-main">
				<div className="character-card">
					<div className="profile-image-card">
						<img src={characterDetails.imagepath} alt="profile-img" className="profile-img" />
					</div>

					<div className="card-content">
						<div className="card-name" id={characterDetails.id}>
							{characterDetails.cardName}
						</div>

						<div className="card-status">
							<div
								style={{
									width: '12px',
									height: '12px',
									borderRadius: '50%',
									marginRight: '10px',
									backgroundColor:
										characterDetails.cardStatus === 'Dead'
											? 'rgb(214, 61, 46)'
											: characterDetails.cardStatus === 'unknown'
												? 'rgb(158, 158, 158)'
												: characterDetails.cardStatus === 'Alive' ? 'rgb(85, 204, 68)' : '',
								}}
							/>
							<div className="card-status-text">{characterDetails.cardStatus}</div>
						</div>

						<div style={{ display: 'flex', alignItems: 'center', marginTop: '24px' }}>
							<div className="card-location-header">{characterDetails.cardLocationHeader}</div>
							<div className="card-location">{characterDetails.cardLocation}</div>
						</div>

						<div style={{ display: 'flex', alignItems: 'center', marginTop: '24px' }}>
							<div className="card-location-header">Gender:</div>
							<div className="card-location">{characterDetails.gender}</div>
						</div>

						<div style={{ display: 'flex', alignItems: 'center', marginTop: '24px' }}>
							<div className="card-location-header">Species:</div>
							<div className="card-location">{characterDetails.species}</div>
						</div>

						<div style={{ display: 'flex', alignItems: 'center', marginTop: '24px' }}>
							<div className="card-location-header">Type:</div>
							<div className="card-location">{characterDetails.type}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
