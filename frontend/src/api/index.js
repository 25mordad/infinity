import axios from 'axios';

const url = process.env.REACT_APP_SERVER;


let token = "999" ;
if (localStorage.getItem('profile')) {
    token = localStorage.getItem('profile');
    token = JSON.parse(token).token;
  }

export const fetchCharacters = (page) => axios.get(`${url}/list/${page}`);
export const fetchSinglechar = (id) => axios.get(`${url}/list/character/${id}`);

export const signUp = (formData) => axios.post(`${url}/user/signup`,formData);
export const signIn = (formData) => axios.post(`${url}/user/signin`,formData);
export const likeCharacter = (id) => axios.patch(`${url}/user/likePost/${id}?token=${token}`);
