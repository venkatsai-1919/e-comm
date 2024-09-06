import React, { useContext } from 'react';
import './Navbar.css';
import { useState } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/shopContext';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';




const Navbar= (props) => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const profilePicRef = useRef();
     const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/profile",{state:{user:props.userData}});
    }
 
    return (

        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo"/>
                <p>PEPAAA</p>

            </div>
            <ul className='nav-menu'>
                <li onClick={()=> {setMenu("shop")}}> <Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop"?<hr />:<></>} </li>
                <li onClick={()=> {setMenu("mens")}}> <Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu==="mens"?<hr />:<></>}</li>
                <li onClick={()=> {setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link> {menu==="womens"?<hr />:<></>}</li>
                <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr />:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
            {props.isLogin ? (
                                <div className="profile-pic-container" onClick={handleClick} ref={profilePicRef}>
                                    <img
                                        className="profile-pic"
                                        src='profile.png'
                                        alt="profile"
                                        style={{height:'50px', width:'50px'}}

                                    />
                                </div>
                            )
                :
                <Link to='/login'><button>Login</button></Link>
                } 
               <Link to='/cart'> <img src={cart_icon} alt="" /> </Link> 
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )

}

export default Navbar