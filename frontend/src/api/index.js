import axios from 'axios';

const url = process.env.REACT_APP_SERVER+'/list';
console.log(process.env.REACT_APP_SERVER)
export const fetchCharacters = (page) => axios.get(`${url}/${page}`);
export const fetchSinglechar = (id) => axios.get(`${url}/character/${id}`);
