import { useLocation } from "react-router-dom";
import { useState , useEffect } from "react";
import { Link  } from "react-router-dom";
import { set } from "rsuite/esm/utils/dateUtils";
function Profile(props) {
    const [userData, setUserData] = useState({});
   
   const location = useLocation();
   console.log(location.state);
   useEffect(()=>{
     if(location.state !== null){
        setUserData(location.state.user);
        sessionStorage.setItem('userData', JSON.stringify(location.state.user));
     }
     else
     {
        const storedUserData = sessionStorage.getItem('userData');
        if(storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUserData(parsedUserData);
        }
    }
   },[location.state]);
    return (
      <>
      <div className="card">
        <p> name : {userData.email}</p>
        <Link to="/"><button>Home</button></Link>
      </div>
      </>
    )
    
}

export default Profile;