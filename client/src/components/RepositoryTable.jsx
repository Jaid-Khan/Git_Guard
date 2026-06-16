import { Link } from "react-router-dom";

const RepositoryTable = ({ repositories = [] }) => {
  if (!repositories.length) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800">
          No Repositories Found
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          No repository data is available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">
          Repositories
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          View repository reviews, issues, and settings.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Repository
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Reviews
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Issues
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Critical
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                High
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Settings
              </th>
            </tr>
          </thead>

          <tbody>
            {repositories.map((repo) => (
              <tr
                key={repo.repoName}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-800">
                      {repo.repoName}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span className="font-medium text-gray-700">
                    {repo.totalReviews}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="font-medium text-gray-700">
                    {repo.totalIssues}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-600">
                    {repo.critical}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-50 text-orange-600">
                    {repo.high}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <Link
                    to={`/settings/${encodeURIComponent(
                      repo.repoName
                    )}`}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Configure
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepositoryTable;