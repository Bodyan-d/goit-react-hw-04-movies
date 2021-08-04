import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage({ muviesToday }) {
  console.log(muviesToday);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {muviesToday.map(muvie => (
          <li key={muvie.id}>
            <Link to="">{muvie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
