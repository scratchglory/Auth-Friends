import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// it is a class component with a state object of 'username' and 'password'
// using the username and password to control the two inputs
// credentials object is updated through the handle change/submit form caled login function

class Login extends React.Component {
  // setting state
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  // used in the form onSubmit
  login = e => {
    e.preventDefault();
    // Make a POST request, send the credentials obj to the api
    axiosWithAuth()
      .post("http://localhost:5000/api/login", this.state.credentials)
      // setting the token/payload to the local storage
      .then(res => {
        console.log("LOGIN-AXIOS:", res);
        // good to have an if statement, in case the user doesn't have local storage
        if (window.localStorage) {
          window.localStorage.setItem("token", res.data.payload);
        }
        // no need for 'else' statement
        this.props.history.push("/protected");
      })
      .catch(err => console.log("LOGIN-ERROR: ", err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="USERNAME"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="PASSWORD"
          />
          <button>LOG IN</button>
        </form>
      </div>
    );
  }
}

export default Login;
