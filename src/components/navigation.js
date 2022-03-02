import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => {
  const theme = localStorage.getItem('theme');
  return (
  <>
    <div className={styles.bar}>
       <Link to="/" className={styles.homeLogo}>
          <img className={theme !== 'dark' ? styles.light : styles.dark} alt="Harmony"></img>
       </Link>
       <Link to="/app" className={styles.open}>Open App</Link>
    </div>
    <div className={styles.homeThingo}>
      <a href={process.env.GATSBY_MAIN_DOMAIN}>Home</a>
      <a href={process.env.GATSBY_MAIN_DOMAIN + '/guidelines'}>Guidelines</a>
      <a href={process.env.GATSBY_MAIN_DOMAIN + '/privacy'}>Privacy Policy</a>
      <Link to="/" activeClassName={styles.active}>News</Link>
      <a target="_blank" rel="noreferrer" href="https://github.com/orgs/HarmonyOpenChat">GitHub</a>
    </div>
    </>
);
}

export default Navigation
