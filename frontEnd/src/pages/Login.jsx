import React from 'react'

function Login (){
  return (
    <>
        <div className='bg-primary'>
            <div>
                <h1>Login</h1>
                <div>
                    <input type='email'
                    placeholder='email'
                    className='form-control'>
                    </input>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login