import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://headphoneapi.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  }
});