import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import api from '../api/api';

function* fetchGetLocation(action) {
	try {
		const getLocation = yield call(api.fetchLocation);
		yield put({
			type: types.GET_LOCATION_SUCCESS,
			locationDetails: getLocation.data,
		});
	} catch (e) {
		yield put({ type: types.GET_LOCATION_ERROR, message: e.message });
	}
}

function* getLocationSaga() {
	yield takeLatest(types.GET_LOCATION_REQUEST, fetchGetLocation);
}

export default getLocationSaga;
