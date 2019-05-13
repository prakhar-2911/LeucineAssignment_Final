import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './app';
import Submission from './components/submission';

const DefaultComponent = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/submission" component={Submission}></Route>
    <Route path="/" component={App}></Route> 
    </Switch>
    </BrowserRouter>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DefaultComponent />, rootElement);
