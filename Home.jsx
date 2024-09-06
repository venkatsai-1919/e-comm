
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Home() {
  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
   
   const location = useLocation();
   console.log(location.state);
   useEffect(()=>{
    if(location.state !== null){
        setUserData(location.state.user);
        setIsLogin(true);
        sessionStorage.setItem('userData', JSON.stringify(location.state.user));
     }
     else
     {
        const storedUserData = sessionStorage.getItem('userData');
        if(storedUserData) {
            setIsLogin(true);
            const parsedUserData = JSON.parse(storedUserData);
            setUserData(parsedUserData);
        }
    }
   },[location.state]);

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
      <Navbar isLogin={isLogin} userData={userData} />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Home;