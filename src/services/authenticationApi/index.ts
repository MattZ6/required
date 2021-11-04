import axios from 'axios';

export const authenticationApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
