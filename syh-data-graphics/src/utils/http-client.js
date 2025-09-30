// http-client.js

import axios from 'axios';
import { httpErrorHandler } from './http-error-handler';

export const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL
const isDev = import.meta.env.DEV;

export const httpClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  withCredentials: true
});

axios.defaults.timeout = 5000;

httpClient.interceptors.response.use((response) => response, (error) => {
  httpErrorHandler(error)
});
