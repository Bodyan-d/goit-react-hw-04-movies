import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header(props) {
  //   const location = useLocation();

  return (
    <nav className={styles.navigation}>
      <NavLink
        exact
        to="/"
        className={styles.headerLink}
        activeClassName={styles.active}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={styles.headerLink}
        activeClassName={styles.active}
      >
        Movies
      </NavLink>
    </nav>
  );
}
