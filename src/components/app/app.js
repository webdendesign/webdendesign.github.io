import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from '../header/header';
import {HomePage, TodoPage, TablePage, SitePage, FormPage} from '../pages';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Switch>
        <Route
          path='/'
          component={HomePage}
          exact/>
        <Route
          path='/todo'
          component={TodoPage}
          />
        <Route
          path='/table'
          component={TablePage}
          />
        <Route
          path='/site'
          component={SitePage}
          />
        <Route
          path='/form'
          component={FormPage}
          />
      </Switch>
    </div>
  )
};

export default App;
