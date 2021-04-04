import { requestGetLocation, requestGetLocationId } from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
	return {
		locationDetails: state.getLocationDetails.locationDetails,
		locationLoading: state.getLocationDetails.isFetcing,
		locationIdDetails: state.getLocationIdDetails.locationIdDetails,
		locationIdLoading: state.getLocationIdDetails.isFetcing,
		residentDetails: state.getLocationIdDetails.residentDetails,
	};
};

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			requestGetLocation,
			requestGetLocationId,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
