import * as types from '../actions/actionTypes';

const getLocationIdDetails = (
	state = {
		isFetching: false,
		locationIdDetails: [],
		residentDetails: [],
	},
	action,
) => {
	switch (action.type) {
		case types.GET_LOCATION_ID_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.GET_LOCATION_ID_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				locationIdDetails: action.locationIdDetails,
				residentDetails: action.residentDetails,
			});
		case types.GET_LOCATION_ID_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.message,
			});
		default:
			return state;
	}
};

export default getLocationIdDetails;
