import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Recipes from './components/Recipes';
class App extends Component {
render() {
    return (
    <div className='App'>
    <BrowserRouter> 
    <div>
             <Switch>
             <Route path="/" component={Home} exact/> 
             <Route path="/home" component={Home} /> 
             <Route path="/login" component={Login}/> 
             <Route path="/signup" component={Register}/> 
             <Route path="/recipes" component={Recipes} /> 
              </Switch> 
          </div>
          </BrowserRouter>
   </div> 
    );
  }
}

export default App;
