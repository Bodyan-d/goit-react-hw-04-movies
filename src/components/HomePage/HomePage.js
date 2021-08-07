import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage({ muviesToday }) {
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {muviesToday.map(muvie => {
          console.log(muvie);

          return (
            <li key={muvie.id}>
              <Link to={`/movies/${muvie.id}`}>{muvie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
