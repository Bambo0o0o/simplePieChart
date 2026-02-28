import axios from "axios";
import Dashboard from "./pages/Dashboard";

const API = axios.create({
  // Offline URL
  // baseURL: "http://localhost:5000/api/v1",
  // Online URL
   baseURL: process.env.REACT_APP_API_URL,
});

function App() {
  return <Dashboard />;
}

// Temporay Adding when setup REACT_APP_API_URL
console.log("API URL:", process.env.REACT_APP_API_URL);

export default API;