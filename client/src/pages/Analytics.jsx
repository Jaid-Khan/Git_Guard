import useApi from "../hooks/useApi";

import AnalyticsChart from "../components/AnalyticsChart";

import {
  getSeverityAnalytics,
  getCategoryAnalytics,
  getRepositoryAnalytics,
} from "../services/api";

const Analytics = () => {
  const severity = useApi(
    getSeverityAnalytics
  );

  const categories = useApi(
    getCategoryAnalytics
  );

  const repositories = useApi(
    getRepositoryAnalytics
  );

  if (
    severity.loading ||
    categories.loading ||
    repositories.loading
  ) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Analytics
      </h1>

      <AnalyticsChart
        title="Severity Distribution"
        data={severity.data.data}
        dataKey="count"
      />

      <AnalyticsChart
        title="Category Distribution"
        data={categories.data.data}
        dataKey="count"
      />

      <AnalyticsChart
        title="Repository Activity"
        data={repositories.data.data}
        dataKey="totalIssues"
      />
    </div>
  );
};

export default Analytics;