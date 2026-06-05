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
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#fca311] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">
            Loading Dashboard...
          </p>
        </div>
      </div>
    );
  }

  const analytics = data?.data || {};

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor repository reviews, issues,
          and performance insights.
        </p>
      </div>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
      </section>

      {/* Leaderboard Section */}
      <section className="bg-[#161A22] border border-[#272B35] rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Repository Leaderboard
            </h2>

            <p className="text-gray-400 mt-1">
              Top repositories ranked by review
              activity and issue detection.
            </p>
          </div>
        </div>

        <RepositoryTable
          repositories={leaderboard?.data || []}
        />
      </section>
    </div>
  );
};

export default Dashboard;