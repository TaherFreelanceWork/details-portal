import * as types from '../actions/actionTypes';

const getLocationDetails = (
	state = {
		isFetching: false,
		locationDetails: [],
	},
	action,
) => {
	switch (action.type) {
		case types.GET_LOCATION_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.GET_LOCATION_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				locationDetails: action.locationDetails,
			});
		case types.GET_LOCATION_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.message,
			});
		default:
			return state;
	}
};

export default getLocationDetails;
