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
        PR #{review.prNumber}
      </h1>

      <div className="space-y-4">
        {review.issues.map((issue) => (
          <div
            key={issue._id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h3 className="font-bold text-lg">
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
              File:
              {" "}
              {issue.file}
            </p>

            <p>
              Line:
              {" "}
              {issue.line}
            </p>

            <p>
              {issue.explanation}
            </p>

            <div className="mt-3">
              <strong>
                Suggestion:
              </strong>

              <p>
                {issue.suggestion}
              </p>
            </div>

            <pre className="bg-gray-100 mt-3 p-3 rounded">
              {issue.fixedCode}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewDetails;