import useApi from "../hooks/useApi";

import { getLeaderboard } from "../services/api";

import RepositoryTable from "../components/RepositoryTable";

const Repositories = () => {
  const { data, loading } =
    useApi(getLeaderboard);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Repositories
      </h1>

      <RepositoryTable
        repositories={data?.data || []}
      />
    </div>
  );
};

export default Repositories;