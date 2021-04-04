import axios from 'axios';

const baseURL = `https://rickandmortyapi.com/api`;

const fetchLocation = (id) => {
	const URL = `${baseURL}/location`;
	return axios.get(URL);
};

const fetchLocationById = (id) => {
	const URL = `${baseURL}/location/${id}`;
	return axios.get(URL);
};

const fetchResidentDetails = (residents) => {
	return Promise.all(residents.map(fetchResidentResponse));
};

const fetchResidentResponse = (URL) => {
	return axios.get(URL).then((response) => {
		return response.data;
	});
};

export default {
	fetchLocation,
	fetchLocationById,
	fetchResidentDetails,
};
