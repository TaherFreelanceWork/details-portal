export const transformLocationData = (data) => {
	return (
		data &&
		data.map((_, index) => {
			return {
				key: _.id,
				locationName: _.name,
				character: _.residents,
				index: index,
			};
		})
	);
};
