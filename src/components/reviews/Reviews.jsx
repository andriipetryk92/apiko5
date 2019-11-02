import React, { Fragment, useState, useEffect } from "react";
import { Review } from "./Review";
import uuid from "uuid/v4";
import { Link, useRouteMatch } from "react-router-dom";
import T from "prop-types";

export const Reviews = () => {
  const [review, setInputValue] = useState("");
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem("reviews")) || []
  );

  const { path } = useRouteMatch();

  useEffect(() => {
    const reviewsStringified = JSON.stringify(reviews);
    localStorage.setItem("reviews", reviewsStringified);
  }, [reviews]);

  const onChange = event => setInputValue(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (review === "") return;
    const id = uuid();
    setReviews([...reviews, { id, review }]);
    setInputValue("");
  };
  const clearLocalStorage = () => {
    setReviews([]);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write some thing good"
          value={review}
          onChange={onChange}
        />
      </form>
      {reviews.map(review => (
        <Review key={review.id} {...review} />
      ))}
      <button onClick={clearLocalStorage}>
        <Link to={path}>Crear LocalStorage</Link>
      </button>
    </Fragment>
  );
};

Reviews.propTypes = {
  onSubmit: T.func,
  onChange: T.func,
  clearLocalStorage: T.func,
  path: T.string,
  reviews: T.shape({
    id: T.string,
    review: T.string
  })
};
