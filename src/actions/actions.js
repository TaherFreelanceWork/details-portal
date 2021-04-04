import * as types from './actionTypes';

export function requestGetLocation() {
	return {
		type: types.GET_LOCATION_REQUEST,
	};
}

export function requestGetLocationId(id) {
	return {
		type: types.GET_LOCATION_ID_REQUEST,
		id,
	};
}
