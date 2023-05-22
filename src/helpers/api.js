import axios from "axios";

const api = axios.create({
  baseURL: "https://fine-rose-horse-boot.cyclic.app/api/",
  
});

export default api;
