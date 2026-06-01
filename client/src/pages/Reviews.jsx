import useApi from "../hooks/useApi";
import { useState } from "react";
import { getReviews } from "../services/api";

import ReviewTable from "../components/ReviewTable";

const Reviews = () => {
  const { data, loading } = useApi(getReviews);

  const [search, setSearch] = useState("");

  const filteredReviews = data.data.filter((review) =>
    review.repoName.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search Repository..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-6">Reviews</h1>

      <ReviewTable reviews={filteredReviews} />
    </div>
  );
};

export default Reviews;
