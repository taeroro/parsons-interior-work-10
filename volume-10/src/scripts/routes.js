import React from 'react';
import { Route, Switch } from 'react-router-dom';

// JS files
import AppliedRoute from './applied-route';
import Introduction from './introduction/introduction';

export default () =>
<Switch>
  <AppliedRoute path="/" exact component={Introduction} />

  { /* Catch all unmatched routes */ }
  {/* <Route component={NotFound} /> */}
</Switch>;
