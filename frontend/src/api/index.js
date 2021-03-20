import axios from 'axios';

const url = process.env.REACT_APP_SERVER;


export const fetchCharacters = (page) => axios.get(`${url}/list/${page}`);
export const fetchSinglechar = (id) => axios.get(`${url}/list/character/${id}`);

export const signUp = (formData) => axios.post(`${url}/user/signup`,formData);
export const signIn = (formData) => axios.post(`${url}/user/signin`,formData);
