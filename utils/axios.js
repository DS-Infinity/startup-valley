import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXTAUTH_URL
    ? process.env.NEXTAUTH_URL
    : '/',
  withCredentials: true,
});

export default instance;
