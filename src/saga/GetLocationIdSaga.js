import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import api from '../api/api';

function* fetchGetLocationId(action) {
	try {
		const getLocationId = yield call(api.fetchLocationById, action.id);
		const residentsDetails = getLocationId && getLocationId.data && getLocationId.data.residents;
		const getResidentDetails = yield call(api.fetchResidentDetails, residentsDetails);
		console.log('get residential details:', getResidentDetails);
		yield put({
			type: types.GET_LOCATION_ID_SUCCESS,
			locationIdDetails: getLocationId.data,
			residentDetails: getResidentDetails,
		});
	} catch (e) {
		yield put({ type: types.GET_LOCATION_ID_ERROR, message: e.message });
	}
}

function* getLocationIdSaga() {
	yield takeLatest(types.GET_LOCATION_ID_REQUEST, fetchGetLocationId);
}

export default getLocationIdSaga;
