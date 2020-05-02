import axios from 'axios';
import { notification } from 'antd';

const instance = axios.create({
  baseURL: 'http://localhost:7001/admin',
  timeout: 3000,
  withCredentials: true
});

instance.interceptors.response.use(function (response) {
  const { data } = response;
  const { error, message } = data || {};
  if (error) {
    notification.error({
      message: '错误',
      description: message,
    });
    return Promise.reject(error);
  } else {
    return data;
  }
}, function (error) {
  const { response } = error;
  const { status, data: { message } = {}} = response || {};
  let description = '服务器访问超时';
  if (status === 401) {
    description = message;
  }
  notification.error({
    message: '错误',
    description,
  });
  return Promise.reject(error);
});

export default instance;