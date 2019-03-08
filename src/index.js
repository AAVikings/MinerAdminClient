import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListAllMiners from './Components/ListAllMiners';

const App = () => (
  <div className='eventsModule'>
    <Switch>
      <Route exact path='/miners/' component={ListAllMiners} />
    </Switch>
  </div>
);

export default App;
