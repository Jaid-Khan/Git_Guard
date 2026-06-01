import { useParams } from "react-router-dom";

import useApi from "../hooks/useApi";

import { getReviewById } from "../services/api";

const ReviewDetails = () => {
  const { id } = useParams();

  const { data, loading } =
    useApi(() => getReviewById(id));

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const review = data.data;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Review Details
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p>
          <strong>Repository:</strong>{" "}
          {review.repoName}
        </p>

        <p>
          <strong>PR:</strong>{" "}
          #{review.prNumber}
        </p>

        <p>
          <strong>Author:</strong>{" "}
          {review.prAuthor}
        </p>

        <p>
          <strong>Total Issues:</strong>{" "}
          {review.totalIssues}
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {review.issues.map(
          (issue, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow"
            >
              <h3 className="font-bold">
                {issue.issue}
              </h3>

              <p>
                Severity:
                {" "}
                {issue.severity}
              </p>

              <p>
                Category:
                {" "}
                {issue.category}
              </p>

              <p>
                {issue.explanation}
              </p>

              <p>
                Recommendation:
                {" "}
                {issue.suggestion}
              </p>

              <pre className="bg-gray-100 p-3 mt-2 rounded overflow-x-auto">
                {issue.fixedCode}
              </pre>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ReviewDetails;