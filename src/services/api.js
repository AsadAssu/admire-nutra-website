import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
});

API.interceptors.request.use((config) => {
  // Ensure the request URL has a trailing slash to prevent Next.js 308 redirects
  if (config.url) {
    const [path, query] = config.url.split('?');
    if (!path.endsWith('/') && !path.includes('.')) {
      config.url = `${path}/${query ? `?${query}` : ''}`;
    }
  }

  const userInfo = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userInfo')) : null;
  if (userInfo && userInfo.token) {
    config.headers.Authorization = `Bearer ${userInfo.token}`;
  }
  return config;
});

export default API;
