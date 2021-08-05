import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import api from '../../sourse/movies-api';

export default function MoviePage() {
  const [value, setVelue] = useState('');
  const [muviesOnSearch, setMuviesOnSearch] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const savedMuvie = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (location.search !== ' ') {
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
          muviesOnSearch.map(muvie => (
            <li key={muvie.id}>
              <Link to={''}>{muvie.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
