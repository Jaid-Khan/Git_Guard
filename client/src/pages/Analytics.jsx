import useApi from "../hooks/useApi";

import AnalyticsChart from "../components/AnalyticsChart";

import {
  getSeverityDistribution,
  getCategoryDistribution,
} from "../services/api";

const Analytics = () => {
  const {
    data: severity,
    loading: severityLoading,
  } = useApi(
    getSeverityDistribution
  );

  const {
    data: category,
    loading: categoryLoading,
  } = useApi(
    getCategoryDistribution
  );

  if (
    severityLoading ||
    categoryLoading
  ) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Analytics
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <AnalyticsChart
          title="Severity Distribution"
          data={severity.data}
          type="bar"
        />

        <AnalyticsChart
          title="Category Distribution"
          data={category.data}
          type="pie"
        />
      </div>
    </div>
  );
};

export default Analytics;