import { useState, useEffect, lazy, Suspense } from 'react';
import { ImArrowLeft } from 'react-icons/im';
// import AdditionalInfo from '../Cast';
import {
  useParams,
  useHistory,
  useRouteMatch,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import api from '../../sourse/movies-api';
import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

export default function MovieDetailsPage(props) {
  const [movie, setMovie] = useState({});
  const [genresMovie, setgenresMovie] = useState([]);
  const match = useRouteMatch();
  const history = useHistory();
  const { movieId } = useParams();

  useEffect(() => {
    api.FetchMuvieFullInfo(movieId).then(muvieOnSearch => {
      setMovie(muvieOnSearch);
      setgenresMovie(muvieOnSearch.genres);
    });
  }, [movieId]);

  return (
    <>
      <button className={styles.button} onClick={history.goBack}>
        <ImArrowLeft /> <span className={styles.buttonTitle}>Go back</span>
      </button>
      <div className={styles.movie}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="poster"
        />
        <div className={styles.descrption}>
          <h3>{movie.title}</h3>
          <p> {`User Score: ${movie.vote_average * 10}%`}</p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul>
            {genresMovie.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <h6>Additional information</h6>
      <ul>
        <li>
          <NavLink to={`${match.url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Suspense>
        <Switch>
          <Route path={`${match.path}/cast`} exact>
            <Cast />
          </Route>
          <Route path={`${match.path}/reviews`} exact>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
