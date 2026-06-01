import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getAnalytics = () =>
  api.get("/analytics");

export const getSeverityAnalytics = () =>
  api.get("/analytics/severity");

export const getCategoryAnalytics = () =>
  api.get("/analytics/categories");

export const getRepositoryAnalytics = () =>
  api.get("/analytics/repositories");

export default api;