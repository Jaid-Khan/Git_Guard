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
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <h1 className="text-lg font-medium">
          Loading...
        </h1>
      </div>
    );
  }

  const analytics = data?.data || {};

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        GitGuard Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
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

      <h2 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-10 mb-4">
        Repository Leaderboard
      </h2>

      <div className="w-full overflow-x-auto">
        <RepositoryTable
          repositories={leaderboard?.data || []}
        />
      </div>
    </div>
  );
};

export default Dashboard;