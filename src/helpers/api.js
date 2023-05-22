import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-agam.cyclic.app/api/",
  
});

export default api;
