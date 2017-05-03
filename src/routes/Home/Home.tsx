import * as React from 'react';

import styles from './Home.scss';
import * as logo from './logo.svg';

const Home: React.StatelessComponent<{}> = () => (
  <div>
    <h1 className={styles.clr}>Welcome homes!</h1>
    <img src={logo} className="app-logo" alt="logo" />
  </div>
)

export default Home;