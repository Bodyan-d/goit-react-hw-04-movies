import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../sourse/movies-api';
import styles from './Cast.module.css';

export default function Cast(props) {
  const [casters, setCasters] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.FetchMuvieCast(movieId).then(caster => {
      setCasters(caster.cast);
    });
  }, [movieId]);

  return (
    <ul className={styles.casters}>
      {casters &&
        casters.map(cast => (
          <li key={cast.name} className={styles.casterItem}>
            <img
              className={styles.profileImage}
              src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
              alt="caster"
            />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
    </ul>
  );
}
