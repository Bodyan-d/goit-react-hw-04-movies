import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../sourse/movies-api';
// import { Route, Switch, useRouteMatch } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
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
