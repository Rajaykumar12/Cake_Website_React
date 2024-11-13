import React,{useState} from 'react'
export default function SignUp() {

    const [data, setData] = useState({
        username: '',
        useremail: '',
        passwrod: ''
    })

    let handleChange = (eChange) =>{
        let {name, value} = eChange.target;
        setData({...data , [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Thank You")
        console.log("formdata:->" , data)
    }
  return (
    <>
        <h2 className='signup'>Sign Up</h2>
        <div className='form'>
            <div className='form-contents'>
                <label>Username: </label>
                <input 
                type='text'
                name='username'
                value={data.username}
                onChange={handleChange}
                placeholder='Enter Name'
                required
                />
            </div>
            <br/>
            <div className='form-contents'>
                <label>UserEmail: </label>
                <input
                type='text'
                name='useremail'
                value={data.useremail}
                onChange={handleChange}
                placeholder='Enter email'
                required
                />
            </div>
            <br/>

            <div className='form-contents'>
                <label>Password </label>
                <input
                type='text'
                name='password'
                value={data.passwrod}
                onChange={handleChange}
                placeholder='Enter Password'
                required
                />
            </div>

            <button className="button1" onClick={handleSubmit}>Submit</button>
        </div>
    </>
  )
}
