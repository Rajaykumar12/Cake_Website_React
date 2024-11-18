import React from 'react'

export default function Login() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <h2 className='signup'>Login</h2>
        <div className='form'>
                <div className='form-contents'>
                    <label>Username: </label>
                    <input 
                    type='text'
                    placeholder='Enter Name'
                    required
                    />
                </div>
                <div className='form-contents'>
                    <label>Password: </label>
                    <input type='text' placeholder='Enter Password'></input>
                </div>
                <button className="button1">Submit</button>
        </div>
    </div>
  )
}
