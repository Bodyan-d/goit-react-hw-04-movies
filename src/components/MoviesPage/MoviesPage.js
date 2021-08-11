import { useState, useEffect } from 'react';
import slugify from 'slugify';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import api from '../../sourse/movies-api';

export default function MoviePage() {
  const [value, setVelue] = useState('');
  const [muviesOnSearch, setMuviesOnSearch] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const savedMuvie = new URLSearchParams(location.search.substring(1)).get(
    'query',
  );

  useEffect(() => {
    if (savedMuvie === null) {
      return;
    }

    setVelue(savedMuvie);

    api.FetchMuviesKeyWord(savedMuvie).then(muvieOnSearch => {
      setMuviesOnSearch(muvieOnSearch.results);
    });
  }, [location.search, savedMuvie]);

  const onFormSubmit = e => {
    e.preventDefault();

    if (value === '') {
      return;
    }

    history.push({
      ...location,
      search: `query=${value.toLowerCase()}`,
    });

    api.FetchMuviesKeyWord(value).then(muvieOnSearch => {
      setMuviesOnSearch(muvieOnSearch.results);
    });
  };

  const onInputChange = e => {
    setVelue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input value={value} onChange={onInputChange} />
        <button tupe="submit">Search</button>
      </form>
      <ul>
        {muviesOnSearch &&
          muviesOnSearch.map(item => (
            <li key={item.id}>
              <Link
                to={{
                  pathname: `movies/${item.id}`,
                  state: { from: location, value: value },
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
