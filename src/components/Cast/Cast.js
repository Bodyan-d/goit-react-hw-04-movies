import { useState, useEffect, useRef } from 'react';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import api from '../../sourse/movies-api';
// import { Route, Switch, useRouteMatch } from 'react-router-dom';

export default function Cast({ movieId }) {
  const [casters, setCasters] = useState([]);
  const match = useRouteMatch();
  const savedId = useRef(match.url.substr(8, 6));
  const history = useHistory();
  const location = useLocation();

  let isFirstRender = true;

  useEffect(() => {
    if (!isFirstRender) {
      isFirstRender = !isFirstRender;
      return;
    }

    api.FetchMuvieCast(savedId.current).then(caster => {
      setCasters(caster.cast);
    });
  }, [movieId]);

  return (
    <ul>
      {casters &&
        casters.map(cast => (
          <li key={cast.name}>
            <img
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
