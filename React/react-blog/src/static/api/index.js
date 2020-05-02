import axios from './axios';

function login(data) {
  return axios.post('/login', data);
}

function type() {
  return axios.get('/type');
}

export {
  login,
  type
};