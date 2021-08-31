import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Main from './components/Main';
import Favorite from './components/Favorite'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';



class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Main/>
              </Route>
              <Route exact path="/Favorite">
                <Favorite/>
              </Route>
              <Route exact path="/Profile">
                <Profile/>
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
