import React from 'react'
import "./sass/LoginForm.scss"

export default function LoginForm() {
  return (
    <div className="login">
    <div className="form-element">
    <p>Login</p>
      <form action="" method="">
          <input type="text" name="email" placeholder="Enter Email" required/><br/><br/>
          <input type="password" name="password" placeholder="Enter Password" required/><br/><br/>
          <button type="submit">Login</button>
    </form>
    <p><a href="./SignupForm.js">Create Account</a></p>
</div>
</div>
  )
}
 