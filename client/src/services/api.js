import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Dashboard

export const getOverviewAnalytics = () =>
  api.get("/reviews/stats/dashboard");

export const getLeaderboard = () =>
  api.get("/reviews/stats/leaderboard");

// Analytics

export const getSeverityAnalytics = () =>
  api.get("/reviews/stats/severity");

export const getCategoryAnalytics = () =>
  api.get("/reviews/stats/categories");

// Reviews

export const getReviews = () =>
  api.get("/reviews/recent/activity");

export const getReviewById = (id) =>
  api.get(`/reviews/${id}`);

// Repository Analytics

export const getRepositoryAnalytics = (repoName) =>
  api.get(
    `/reviews/stats/repository/${encodeURIComponent(
      repoName
    )}`
  );

// Settings

export const getSettings = (repoName) =>
  api.get(
    `/settings/${encodeURIComponent(repoName)}`
  );

export const updateSettings = (
  repoName,
  data
) =>
  api.put(
    `/settings/${encodeURIComponent(repoName)}`,
    data
  );

export default api;