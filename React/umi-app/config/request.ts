import { RequestConfig } from 'umi';

const BaseUrl = '/Api';

export const Request: RequestConfig = {
  errorConfig: {
    adaptor: (data) => {
      if (data) {
        return {
          ...data,
          success: data.IsSuccess,
          errorMessage: data.ErrorMsg,
        };
      } else {
        return {
          success: data,
          errorMessage: '请求错误',
        }
      }
    },
  },
  requestInterceptors: [
    function (url, options) {
      url = `${BaseUrl}/${url}`
      return { url, options }
    }
  ],
  responseInterceptors: []
};