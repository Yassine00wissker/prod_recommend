import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate()
  const handelSubmit = (e) =>{
    e.preventDefault();
    console.log(email,password)
    //data base autorization
    if(email && password){
      navigate('/Dashboard')
    }  
  }
  return (
    <>
      <form className='shadow  bg-light p-5  rounded ' onSubmit={handelSubmit} >
        <div className='form-group mb-3'>
          <h1>Login</h1>
          <div>
            <label htmlFor="email">Email address</label>
            <input type='email'
              placeholder='enter email'
              className='form-control'
              id="email"
              onChange={(e)=>setEmail(e.target.value)}
            >
            </input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type='password'
              placeholder='enter password'
              className='form-control'
              id="password"
              onChange={(e)=>setPassword(e.target.value)}
            >
            </input>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        <div className='mt-3'>
          <span>Don't have an account?</span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </>
  )
}

export default Login