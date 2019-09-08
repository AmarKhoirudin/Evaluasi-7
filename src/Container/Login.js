import React, { Component } from "react";
import axios from "axios";
import "../Components/Navbar.css";
import { Redirect } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      token: "",
      isLoading: ""
    };
  }

  signIn = i => {
    i.preventDefault();

    this.setState({
      isLoading: true
    });

    const dataInput = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post(
        "https://penjualanapp-api.herokuapp.com/api/v1/auth/login",
        dataInput
      )
      .then(res => {
        localStorage.setItem("token", res.data.data.token);
        this.setState({
          token: res.data.data.token,
          redirect: true,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { isLoading } = this.state;
    if (localStorage.getItem("token")) {
      return <Redirect to="/news" />;
    } else if (isLoading) {
      return <h1>Loading .... Bang .... </h1>;
    }
    return (
      <div>
        <form onSubmit={this.signIn}>
          <div className="form">
            <div className="form-sign">
              <p>Username</p>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-sign">
              <p>Password</p>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

          <button type="submit" className="login">Login</button>

          </div>

        </form>
      </div>
    );
  }
}

export default App;
