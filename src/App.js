import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';
import { UserBox, BarLogo, Emoji, Placeholder } from './components';
import { Navbar } from './components/Navbar';
import { TasksPage } from './pages';
import { getItemById } from './utils';

import data from './assets/data';

// App - root component
const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="app-content">
          <div className="sidebar">
            <UserBox />
            <Navbar navigationItems={data.navigationItems} />
            <BarLogo />
          </div>

          <main className="main-container">
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path={getItemById(data.navigationItems, 'overview').path}>
                <Placeholder>
                  Overview is coming soon{' '}
                  <Emoji ariaLabel="waiting" content="⏳" />
                </Placeholder>
              </Route>

              <Route path={getItemById(data.navigationItems, 'timer').path}>
                <Placeholder>
                  Timer is coming soon{' '}
                  <Emoji ariaLabel="waiting" content="⏳" />
                </Placeholder>
              </Route>

              <Route path={getItemById(data.navigationItems, 'shifts').path}>
                <Placeholder>
                  Shifts is coming soon{' '}
                  <Emoji ariaLabel="waiting" content="⏳" />
                </Placeholder>
              </Route>

              <Route path={getItemById(data.navigationItems, 'tasks').path}>
                <TasksPage />
              </Route>

              <Route path={getItemById(data.navigationItems, 'account').path}>
                <Placeholder>
                  Account is coming soon{' '}
                  <Emoji ariaLabel="waiting" content="⏳" />
                </Placeholder>
              </Route>

              {/* redirect to /overview if no route match */}
              <Redirect
                to={getItemById(data.navigationItems, data.defaultRouteId).path}
              />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
