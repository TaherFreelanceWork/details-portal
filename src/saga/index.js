import { fork } from 'redux-saga/effects';
import getLocationSaga from './GetLocationSaga';
import getLocationIdSaga from './GetLocationIdSaga';

function* sagas() {
	yield fork(getLocationSaga);
	yield fork(getLocationIdSaga);
}

export default sagas;
