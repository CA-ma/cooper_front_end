// Import libraries
import React from 'react';

// Component to render login form with email and password inputs
const LoginForm = () => {
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
      <button id="submit">Submit</button>
    </form>
  )
}

export default LoginForm