import React, { Component } from "react";
import API from "../API.js";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    error: null
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    API(email, password).then(data => {
      console.log(data);
      if (data.token) {
        this.setState({ loading: true, error: null });
      } else {
        this.setState({ loading: false, error: data.error });
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
        {this.state.loading ? <p> Success </p> : <p> Failure </p>}
      </div>
    );
  }
}

export default Login;
