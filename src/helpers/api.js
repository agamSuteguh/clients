import axios from "axios";

const api = axios.create({
  baseURL: "https://backen-agam.cyclic.app/api/",
  
});

export default api;
