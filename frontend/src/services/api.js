import axios from "axios";

const API = axios.create({
  // Local frontend
  // baseURL: "http://localhost:5000/api/v1",
  // Vercel frontend 
  baseURL: "https://simplepiechart.onrender.com/api/v1",
});

export default API;