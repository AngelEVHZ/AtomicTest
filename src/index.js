import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import Register from './pages/register/register';
import 'bootstrap/dist/css/bootstrap.min.css';

const Root = (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>);

ReactDOM.render(
  Root,
  document.getElementById('root')
);