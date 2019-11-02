import React from "react";
import { Link } from "react-router-dom";
import T from "prop-types";

export const Review = ({ review, id }) => {
  return (
    <div id="review">
      <Link to={`/reviews/${id}`}>{review}</Link>
    </div>
  );
};

Review.propTypes = {
  review: T.string.isRequired,
  id: T.string
};
