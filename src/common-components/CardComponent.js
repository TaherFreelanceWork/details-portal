import React from 'react';
import { useHistory } from 'react-router-dom';

export default function CardComponent(props) {
	const history = useHistory();
	const onCharacterDetailsClick = (event) => {
		history.push({
			pathname: `/character-details/${event.target.id}`,
			state: { characterDetails: props },
		});
	};

	return (
		<div className="card-main">
			<div className="profile-img">
				<img src={props.imagepath} alt="profile-img" />
			</div>
			<div className="card-content">
				<div className="card-name" id={props.id} onClick={onCharacterDetailsClick}>
					{props.cardName}
				</div>

				<div className="card-status">
					<div
						style={{
							width: '12px',
							height: '12px',
							borderRadius: '50%',
							marginRight: '10px',
							backgroundColor:
								props.cardStatus === 'Dead'
									? 'rgb(214, 61, 46)'
									: props.cardStatus === 'unknown'
										? 'rgb(158, 158, 158)'
										: props.cardStatus === 'Alive' ? 'rgb(85, 204, 68)' : '',
						}}
					/>
					<div className="card-status-text">{props.cardStatus}</div>
				</div>
				<div className="card-location-header">{props.cardLocationHeader}</div>
				<div className="card-location">{props.cardLocation}</div>
			</div>
		</div>
	);
}
