import React, { Fragment } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import T from "prop-types";

export const SingleReview = () => {
  let history = useHistory();

  const { params } = useRouteMatch();
  const reviews = JSON.parse(localStorage.getItem("reviews"));

  const { review } = reviews.find(review => params.id === review.id);

  return (
    <Fragment>
      <p>{review}</p>
      <button onClick={() => history.goBack()}>Go Back</button>
    </Fragment>
  );
};
SingleReview.propTypes = {
  review: T.shape({
    id: T.string.isRequired,
    review: T.string.isRequired
  }),
  reviews: T.shape({
    id: T.string.isRequired,
    review: T.string.isRequired
  })
};
