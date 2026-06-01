import { Link } from "react-router-dom";

const ReviewTable = ({ reviews }) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Repository</th>

            <th className="p-3 text-left">PR</th>

            <th className="p-3 text-left">Author</th>

            <th className="p-3 text-left">Issues</th>

            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => (
            <tr key={review._id} className="border-t">
              <td className="p-3">{review.repoName}</td>

              <td className="p-3">#{review.prNumber}</td>

              <td className="p-3">{review.prAuthor}</td>

              <td className="p-3">{review.totalIssues}</td>

              <td className="p-3">
                <Link
                  to={`/reviews/${review._id}`}
                  className="text-blue-600 hover:underline"
                >
                  #{review.prNumber}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
