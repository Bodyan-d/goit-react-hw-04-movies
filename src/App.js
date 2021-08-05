import { lazy, Suspense, useState, useEffect } from 'react';
import api from '../src/sourse/movies-api';
import { BoxesLoader } from 'react-awesome-loaders';
import Header from './components/Header';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

const HomePage = lazy(() => import('./components/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage'));

function App() {
  const [muviesToday, setMuviesToday] = useState(null);

  useEffect(() => {
    api.FetchPopularMuvies().then(muviesToday => {
      setMuviesToday(muviesToday.results);
    });
  }, []);

  return (
    <>
      <div className="container">
        <Route path="/">
          <Header />
        </Route>
        <Suspense fallback={<BoxesLoader />}>
          <Switch>
            <Route path="/" exact>
              {muviesToday && <HomePage muviesToday={muviesToday} />}
            </Route>
            <Route path="/movies">
              <MoviesPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

// <BoxesLoader
//   boxColor={'#6366F1'}
//   style={{ marginBottom: '20px' }}
//   desktopSize={'128px'}
//   mobileSize={'80px'}
// />;

export default App;
