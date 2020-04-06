import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import UserList from '../UserList';
import UserInfo from '../UserInfo';
import UserRepos from '../UserRepos';

// Styles
import './styles.scss';

class App extends Component {
  render() {
      return (
        <Router>
          <Switch>
            <Route path="/" exact component={UserList} />
            <Route path="/userInfo/:login" exact component={UserInfo} />
            <Route path="/userInfo/:login/repo" exact component={UserRepos} />
          </Switch>
        </Router>
      );
  }
}

export default App;
