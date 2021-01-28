import { RequestConfig } from 'umi';

const BaseUrl = '/Api';

export const Request: RequestConfig = {
  errorConfig: {
    adaptor: (data) => {
      return {
        ...data,
        success: data.IsSuccess,
        errorMessage: data.ErrorMsg,
      };
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