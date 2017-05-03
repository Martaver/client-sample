import * as React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import CoreLayout from '../layouts/CoreLayout';
import Home from './Home';
import styles from './App.scss';

import { store, RootState } from '../store';
import { Route } from 'react-router';

const App: React.StatelessComponent<{}> = () => (
  <div>
    {/*<Provider store={store}>*/}
      <h1 className={styles.clr}>App working</h1>
      <BrowserRouter >
        <CoreLayout>
          <Route exact path="/" component={Home} />                  
        </CoreLayout>
      </BrowserRouter>
    {/*</Provider>*/}
    </div>
);

export default App;