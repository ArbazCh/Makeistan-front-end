import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImVtYWlsIjoiYXJiYXpjaDEzMTNAZ21haWwuY29tIiwiaWF0IjoxNjc0OTE3MjczfQ.-_NHk39rqYDgsgQjPCo8VwRtaMpDJWJjeqGVln5TPok";

const BASE_URL = "https://api.escuelajs.co/api/v1/products/";

const API = axios.create({
  baseURL: "http://localhost:3000/api/customer/orders",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default API;
