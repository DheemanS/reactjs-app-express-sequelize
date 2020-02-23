import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import UsersList from "./components/users-list.component";
import FriendsList from "./components/friends-list.component";
import MutualFriendsList from "./components/mutual-friends-list.component";
import logo from "./logo.svg";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faUsers, faUserPlus);
function App() {
  return (
    <Router>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img src={logo} width="30" height="30" />
            </a>
            <Link to="/" className="navbar-brand">Sample App</Link>
          </nav>
          <br/>

      <Route path="/" exact component={UsersList} />
      <Route path="/friend/:id" component={FriendsList} />
      <Route path="/mutual-friend/:id" component={MutualFriendsList} />

    </div>
    </Router>
  );
}

export default App;
