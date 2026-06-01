import useApi from "../hooks/useApi";

import StatCard from "../components/StatCard";
import RepositoryTable from "../components/RepositoryTable";

import {
  getOverviewAnalytics,
  getLeaderboard,
} from "../services/api";

const Dashboard = () => {
  const { data, loading } =
    useApi(getOverviewAnalytics);

  const {
    data: leaderboard,
    loading: leaderboardLoading,
  } = useApi(getLeaderboard);

  if (loading || leaderboardLoading) {
    return <h1>Loading...</h1>;
  }

  const analytics = data?.data || {};

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        GitGuard Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Reviews"
          value={analytics.totalReviews || 0}
        />

        <StatCard
          title="Total Issues"
          value={analytics.totalIssues || 0}
        />

        <StatCard
          title="Critical Issues"
          value={analytics.critical || 0}
        />

        <StatCard
          title="High Issues"
          value={analytics.high || 0}
        />
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Repository Leaderboard
      </h2>

      <RepositoryTable
        repositories={leaderboard?.data || []}
      />
    </div>
  );
};

export default Dashboard;