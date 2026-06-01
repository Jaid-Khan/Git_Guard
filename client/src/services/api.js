import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getAnalytics = () => api.get("/analytics");

export const getSeverityAnalytics = () => api.get("/analytics/severity");

export const getCategoryAnalytics = () => api.get("/analytics/categories");

export const getRepositoryAnalytics = () => api.get("/analytics/repositories");

export const getReviews = () => api.get("/reviews");

export const getReviewById = (id) => api.get(`/reviews/${id}`);

export const getLeaderboard = () => api.get("/analytics/leaderboard");

export const getSettings = (repoName) =>
  api.get(`/settings/${encodeURIComponent(repoName)}`);

export const updateSettings = (repoName, data) =>
  api.put(`/settings/${encodeURIComponent(repoName)}`, data);

export const getOverviewAnalytics = () => api.get("/analytics/overview");

export const getSeverityDistribution = () =>
  api.get("/analytics/severity-distribution");

export const getCategoryDistribution = () =>
  api.get("/analytics/category-distribution");

export default api;
