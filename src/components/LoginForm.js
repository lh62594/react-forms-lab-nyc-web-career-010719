import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(event.target.name, event.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      username: this.state.username,
      password: this.state.password
    })
    // console.log(e.target.username.value, e.target.password.value);

  }

  render() {
    return (
      <form onSubmit={ e => {this.handleSubmit(e)} }>
        <div>
          <label>
            Username
            <input onChange={this.handleChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
