import axios from 'axios';

const PRODUCTION = 'https://albredyback.xpertsgroup.net/api/';

const api = axios.create({
  baseURL: PRODUCTION,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  validateStatus: () => true,
});

// Purpose: attach authorized token with apis
api.interceptors.request.use(async function (config) {
  const token = null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
export { api };
