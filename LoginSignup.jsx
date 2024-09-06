
import  React, { useState }  from 'react';
import './css/LoginSignup.css';
import { Link } from 'react-router-dom';




const LoginSignup =(props) => {
  
  const [user, setUser] = useState({
    name : '',
    email : '',
    password : ''
  });

  const handleSubmit = async () => {
       props.addUser(user);
  }

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUser((prevData)=>{
      return {
        ...prevData,
        [name] : value
      }
    });
  }
  return (
    <div className='loginsignup' >
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name='name' onChange={handleChange}  value={user.name} placeholder='Your Name' />
          <input type="email" name='email' onChange={handleChange} value={user.email} placeholder='email address' />
          <input type="password" name='password' onChange={handleChange} value={user.password} placeholder='password' />

        </div>

        <button onClick={handleSubmit}>submit</button>

      <div className="loginsignup-agree">
          <input type="checkbox"name='' id='' />
          <p>By continue I agree the terms and policy </p>
        </div>

        <p className="loginsignup-login">Already have an account? <Link to='/login'><span>Login Here</span></Link></p>
        
      </div>
     
    </div>
  );
}

export default LoginSignup;