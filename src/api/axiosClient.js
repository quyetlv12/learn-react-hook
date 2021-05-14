import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://headphoneapi.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  }
});