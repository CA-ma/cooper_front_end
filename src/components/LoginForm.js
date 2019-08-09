import React from 'react';

const LoginForm = () => {
  render() {
    return (
      <form id="login-form">
        <div>
          <label>Email</label>
          <input id="email" />
        </div>
        
        <div>
          <label>Password</label>
          <input id="password" />
        </div>
        <button id="submit"></button>
      </form>
    )
  }
}