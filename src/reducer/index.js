import { combineReducers } from 'redux';

import getLocationDetails from './GetLocationReducer';
import getLocationIdDetails from './GetLocationIdReducer';

export default combineReducers({
	getLocationDetails,
	getLocationIdDetails,
});
