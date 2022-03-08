import axios from 'axios';

export function makeApiClient() {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  return api;
}
