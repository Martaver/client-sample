import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { CoreLayout } from '../layouts/CoreLayout';
import { RootState, store } from '../store';
import styles from './App.scss';
import { Home } from './Home';
// import { Provider } from 'react-redux';

export const App: React.StatelessComponent<{}> = () => (
  <div>
    {/*<Provider store={store}>*/}
      <h1 className={styles.clr}>App working</h1>
      <BrowserRouter >
        <CoreLayout>
          <Route exact={true} path="/" component={Home} />
        </CoreLayout>
      </BrowserRouter>
    {/*</Provider>*/}
    </div>
);
