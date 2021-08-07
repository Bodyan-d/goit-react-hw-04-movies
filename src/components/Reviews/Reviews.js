import { useState, useEffect } from 'react';
import api from '../../sourse/movies-api';
// import { Route, Switch, useRouteMatch } from 'react-router-dom';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);
  let isFirstRender = true;

  useEffect(() => {
    if (!isFirstRender) {
      isFirstRender = !isFirstRender;
      return;
    }

    api.FetchMuvieReviews(movieId).then(reviews => {
      setReviews(reviews.results);
    });
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.map(review => (
          <li>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
    </ul>
  );
}
