import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-agams.cyclic.app/api/",
  
});

export default api;
