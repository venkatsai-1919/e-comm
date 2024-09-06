import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import Login from "./Pages/Login";
import { useState } from "react";
import Home from "./Pages/Home";
import Profile from "./Pages/profile";


function App() {
  const [users, setUsers] = useState([]);

  function addUser(user){
      setUsers((prevData)=>{
        return [...prevData, user]
      });
      console.log(users);
  }
  
  async function checkUser(testUser) {
    const foundUser = users.find(user => user.email === testUser.email && user.password === testUser.password);
    return !!foundUser; // Return true if user is found, otherwise false
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
           <Route index element={<Shop/>} />
           <Route path='mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='womens' element={<ShopCategory banner = {women_banner} category="women"/>}/>
        <Route path='kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path="product/:productId" element={<Product/>}></Route>
        <Route path='cart' element={<Cart/>}/>
          </Route>
          <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login checkUser={checkUser} />}/>
        <Route path='/register' element={<LoginSignup addUser={addUser}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;