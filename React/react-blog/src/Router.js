import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import LayoutRoute from './pages/layout';
import Form from './pages/form';
import List from './pages/list';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route exact path="/">
        <Redirect to="/article" />
      </Route>
      <LayoutRoute path="/article" component={Form} />
      <LayoutRoute path="/list" component={List} />
      <LayoutRoute path="/article/:id" component={Form} />
    </Router>
  );
}

export default App;