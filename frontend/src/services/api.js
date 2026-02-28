import axios from "axios";
import Dashboard from "./pages/Dashboard";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

function App() {
  return <Dashboard />;
}

export default API;