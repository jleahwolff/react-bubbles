import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {

  state = {
    credentials: {
      username: '',
      password: ''
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

  login = e => {
    e.preventDefault();
    console.log(this.state.credentials);
    axios
    .post('http://localhost:5000/api/login', this.state.credentials)
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.payload);
      this.props.history.push('/protect');
    })
    .catch(err => console.log('err', err));
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  render() {
  return (
    <>
      <h1>Login</h1>
      <form className='login' onSubmit={this.login}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          placeholder='user'
          value={this.state.credentials.username}
          onChange={this.handleChange}
          />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='pass'
          value={this.state.credentials.password}
          onChange={this.handleChange}
          />

          <button> Login </button>
      </form>
    </>
  );
};
}
export default Login;
