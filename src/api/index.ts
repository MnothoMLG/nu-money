import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:5000',
});
