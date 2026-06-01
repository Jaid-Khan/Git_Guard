import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getAnalytics = () =>
  api.get("/analytics");

export default api;