import React from 'react'
import "./sass/Signup.scss"

export default function SignupForm() {
  return (
    <div  className="signUp">
    <div className="form-card">
    <p>Sign Up</p>
     <form action="/" method="POST">
       <input type="text" name="name" placeholder="Enter First Name" required /><br/><br/>
       <input type="text" name="name" placeholder="Enter Last Name" required /><br/><br/>
       <input type="text" name="name" placeholder="Email" required /><br/><br/>
       <input type="password" name="password" placeholder="Password" required /><br/><br/>
       <button type="">Sign Up</button>
     </form>
     <p> <a href="./LoginForm.js">Login Instead</a></p>

</div>
    </div>
  )
}
