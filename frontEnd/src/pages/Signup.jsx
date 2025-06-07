import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, name)
        //authentication
        if(email && password && name){
            navigate('/')
        }
    }
    return (
         <>
      <form className='shadow  bg-light p-5  rounded ' onSubmit={handelSubmit} >
        <div className='form-group mb-3'>
          <h1>Sign Up</h1>
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
            <label htmlFor="name">Email address</label>
            <input type='text'
              placeholder='enter name'
              className='form-control'
              id="name"
              onChange={(e)=>setName(e.target.value)}
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        <div className='mt-3'>
          <span>have an account?</span>
          <Link to="/">login</Link>
        </div>
      </form>
    </>
    )
}

export default Signup