import axios from 'axios';

const baseURL = `https://rickandmortyapi.com/api`;

export const fetchLocation = (id) => {
	const URL = `${baseURL}/location`;
	return axios.get(URL);
};

export const fetchLocationById = (id) => {
	const URL = `${baseURL}/location/${id}`;
	return axios.get(URL);
};

export const fetchResidentDetails = (residents) => {
	return Promise.all(residents.map(fetchResidentResponse));
};

export const fetchResidentResponse = (URL) => {
	return axios.get(URL).then((response) => {
		return response.data;
	});
};
