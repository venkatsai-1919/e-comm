
import  React  from 'react';
import './NewsLetter.css';

const NewsLetter =() => {
  return (
    <div className='newsletter' >
     <h1>GET OFFERS ON YOUR EMAIL</h1>
     <p>subscribe to our newsletter and stay updated</p>
     <div>
        <input type="email" placeholder='Your Email id' />
        <button className='button1'>Subscribe</button>
     </div>
    </div>
  );
}

export default NewsLetter;