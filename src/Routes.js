import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Tribes from './pages/Tribes';
import Tribe from './pages/Tribe';
import About from './components/About';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Activate from './components/auth/Activate';
import Private from './components/Private';
import Admin from './components/Admin';
import PrivateRoute from './components/auth/PrivateRoute';
import AdminRoute from './components/auth/AdminRoute';
import Forgot from './components/auth/Forgot';
import Reset from './components/auth/Reset';
import AddTribe from './pages/AddTribe';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/tribes" exact component={Tribes} />
        <Route path="/tribe/:idTribe" exact component={Tribe} />
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/auth/password/forgot" exact component={Forgot} />
        <Route path="/auth/password/reset/:token" exact component={Reset} />
        <Route path="/auth/activate/:token" exact component={Activate} />
        <AdminRoute path="/admin" exact component={Admin} />
        <PrivateRoute path="/private" exact component={Private} />
        <PrivateRoute path="/add-tribe" exact component={AddTribe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
