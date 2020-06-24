import axios from "axios";
import {API_URL} from "../../config";

const url = axios.create({
  baseURL: API_URL,
  timeout: 1000000
});

url.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error)
  });
  
  url.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.data.status_code === 401) {
      location.reload();
    }
    return Promise.reject(error)
  });

 class ApiHandler {
      constructor() {
          this.axios = axios;
      }

      setHeader(header) {
        url.defaults.headers.common[header.key] = header.value;
        url.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      }

      get(res, slug = "") {
        window.console.log('i am hit');
        return url.get(`${res}/${slug}`);
      }

      
      query(res, params) {
        return url.get(res, params);
      }

      post(res, params) {
        return url.post(`${res}`, params);
      }

      postQuery(res, params) { 
        return url.post(res, params);
      }

      put(res, params) {
        return url.put(`${res}`, params);
      }

      delete(res, params) {
        return url.delete(res, params);
      }
  }

  export default ApiHandler
 