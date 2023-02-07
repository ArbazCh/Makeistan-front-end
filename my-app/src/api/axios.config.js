import axios from "axios";
import { useSelector } from "react-redux";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImVtYWlsIjoiYXJiYXpjaDEzMTNAZ21haWwuY29tIiwiaWF0IjoxNjc0OTE3MjczfQ.-_NHk39rqYDgsgQjPCo8VwRtaMpDJWJjeqGVln5TPok";

// const BASE_URL = "https://dummyjson.com/";
const BASE_URL = "http://localhost:5000/api/customer";
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${token}`,
  },
});

export default API;
