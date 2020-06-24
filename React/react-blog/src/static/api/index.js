import axios from './axios';

function login(data) {
  return axios.post('/login', data);
}

function type() {
  return axios.get('/type');
}

function addArticle(data) {
  return axios.post('/article', data)
}

function getArticles() {
  return axios.get('/articles')
}

function delArticle(data) {
  return axios.delete('/article', { data })
}

function getArticle(id) {
  return axios.get(`/article/${id}`)
}

export {
  login,
  type,
  addArticle,
  getArticles,
  delArticle,
  getArticle
};