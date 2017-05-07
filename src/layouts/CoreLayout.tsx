import * as React from 'react';
import styles from './CoreLayout.scss';

export const CoreLayout: React.StatelessComponent<{}> = ({children}) => (
  <div>
    <h1 className={styles.clr}>Testing Corez Layout</h1>
    {children}
  </div>
);
