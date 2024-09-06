
import  React  from 'react';
import './css/LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Login =(props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name : '',
        email : '',
        password : ''
      });
    
      const handleSubmit = async () => {
          if(await props.checkUser(user)){
              navigate("/", {state:{user,isLogin:true}})
          }
          else
          {
            alert("failed");
          }
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
        <h1>Sign In</h1>
        <div className="loginsignup-fields">
          <input type="email" name='email' onChange={handleChange} value={user.email} placeholder='email address' />
          <input type="password" name='password' onChange={handleChange} value={user.password} placeholder='password' />

        </div>
        <button onClick={handleSubmit}>Submit</button>

        <div className="loginsignup-agree">
          <input type="checkbox"name='' id='' />
          <p>By continue I agree the terms and policy </p>
        </div>


        <p className="loginsignup-login">Don't have an account? <Link to='/register'><span>sign up</span></Link></p>
        
      </div>
     
    </div>
  );
}

export default Login;