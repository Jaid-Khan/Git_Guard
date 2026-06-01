import { Link } from "react-router-dom";

const RepositoryTable = ({ repositories = [] }) => {
  if (!repositories.length) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        No repositories found.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">
              Repository
            </th>

            <th className="p-3 text-left">
              Reviews
            </th>

            <th className="p-3 text-left">
              Issues
            </th>

            <th className="p-3 text-left">
              Critical
            </th>

            <th className="p-3 text-left">
              High
            </th>

            <th className="p-3 text-left">
              Settings
            </th>
          </tr>
        </thead>

        <tbody>
          {repositories.map((repo) => (
            <tr
              key={repo.repoName}
              className="border-t"
            >
              <td className="p-3">
                {repo.repoName}
              </td>

              <td className="p-3">
                {repo.totalReviews}
              </td>

              <td className="p-3">
                {repo.totalIssues}
              </td>

              <td className="p-3">
                {repo.critical}
              </td>

              <td className="p-3">
                {repo.high}
              </td>

              <td className="p-3">
                <Link
                  to={`/settings/${encodeURIComponent(
                    repo.repoName
                  )}`}
                  className="text-blue-600 hover:underline"
                >
                  Configure
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RepositoryTable;