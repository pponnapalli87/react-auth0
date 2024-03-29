import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const {
      auth: { isAuthenticated, login }
    } = this.props;
    return (
      <div>
        <h1>Home</h1>
        {isAuthenticated() ? (
          <Link to="/profile">View profile</Link>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    );
  }
}

export default Home;
