import axios from "axios";

export default axios.create({
  // for prod
  baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost:5000/api/v1' : "https://locally.herokuapp.com/api/v1",
  headers: {
    'authorization': `Bearer ${localStorage.getItem('auth_token')}`
  },
  // for development
  // baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});
