import React from 'react';

import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './common/routes';

export default <Switch>{renderRoutes(routes)}</Switch>;

export const history =
  typeof window === 'undefined' ? createMemoryHistory() : createBrowserHistory();
