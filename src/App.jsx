import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppProvider } from '@edx/frontend-platform/react';

import Footer from '@edx/frontend-component-footer';
import Header from '@edx/frontend-component-header';

import { routePath } from 'data/constants/app';
import store from 'data/store';
import {MyHeader} from 'header/MyHeader'
import {MyFooter} from 'footer/MyFooter'
import GradebookPage from 'containers/GradebookPage';
import './App.scss';

const App = () => (
  <AppProvider store={store}>
    <Router>
      <div>
        <MyHeader />
        <main>
          <Switch>
            <Route
              exact
              path={routePath}
              component={GradebookPage}
            />
          </Switch>
        </main>
        <MyFooter />
      </div>
    </Router>
  </AppProvider>
);

export default App;
