import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Adjust the base URL as
})

export default api;