import StatCard from "../components/StatCard";
import useApi from "../hooks/useApi";
import { getAnalytics } from "../services/api";

const Dashboard = () => {
  const {
    data,
    loading,
    error,
  } = useApi(getAnalytics);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const analytics = data.data;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-4">
        <StatCard
          title="Total Reviews"
          value={analytics.totalReviews}
        />

        <StatCard
          title="Total Issues"
          value={analytics.totalIssues}
        />

        <StatCard
          title="Critical"
          value={analytics.critical}
        />

        <StatCard
          title="High"
          value={analytics.high}
        />

        <StatCard
          title="Security"
          value={analytics.security}
        />

        <StatCard
          title="Performance"
          value={analytics.performance}
        />

        <StatCard
          title="Code Quality"
          value={analytics.codeQuality}
        />
      </div>
    </div>
  );
};

export default Dashboard;