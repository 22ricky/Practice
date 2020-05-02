import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import LayoutRoute from './pages/layout';
import Form from './pages/form';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route exact path="/">
        <Redirect to="/index" />
      </Route>
      <LayoutRoute path="/index" component={Form} />
    </Router>
  );
}

export default App;