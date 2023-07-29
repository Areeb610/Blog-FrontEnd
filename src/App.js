import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './pages/CreateBlog';
import ViewBlog from './pages/ViewBlog';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CreateBlog} />
        <Route exact path="/view" component={ViewBlog} />
      </Switch>
    </Router>
  );
}

export default App;
