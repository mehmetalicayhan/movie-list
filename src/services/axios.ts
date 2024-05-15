import axios from 'axios';
import qs from 'qs';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apikey: import.meta.env.VITE_API_KEY
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  }
});

export default axiosInstance;