import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import {Layout} from "./pages";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
              <Route path='/' component={Layout}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
