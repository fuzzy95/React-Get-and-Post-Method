import React from 'react';
import DataFetching from './components/DataFetching';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SimpleNavigation from './components/SimpleNavigation';
import DataPosting from './components/DataPosting';

const App = () => {
  return (
    <>
      <Router>
        <SimpleNavigation />
        <Switch>
          <Route exact path='/get-method' component={DataFetching} />
          <Route exact path='/post-method' component={DataPosting} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
