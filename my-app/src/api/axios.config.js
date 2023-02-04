import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImVtYWlsIjoiYXJiYXpjaDEzMTNAZ21haWwuY29tIiwiaWF0IjoxNjc0OTE3MjczfQ.-_NHk39rqYDgsgQjPCo8VwRtaMpDJWJjeqGVln5TPok";

const BASE_URL = "https://dummyjson.com";

const API = axios.create({
  baseURL: BASE_URL, //"http://localhost:5000/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

<<<<<<< HEAD
export default API;
=======
export default API;
>>>>>>> 0eb3a4fb083303a4fda9a090a49062b692f4f7c5
