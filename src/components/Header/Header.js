import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header(props) {
  //   const location = useLocation();

  return (
    <div>
      <NavLink
        exact
        to="/"
        className={styles.headerLink}
        activeClassName={styles.active}
      >
        Home
      </NavLink>

      <NavLink
        exact
        to="/movies"
        className={styles.headerLink}
        activeClassName={styles.active}
      >
        Movies
      </NavLink>
    </div>
  );
}
