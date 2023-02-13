import axios from "axios";
const token = localStorage.getItem("token");
// const BASE_URL = "http://localhost:5000/api/customer";
const BASE_URL = "http://20.203.128.226:5000/api/customer";
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default API;
