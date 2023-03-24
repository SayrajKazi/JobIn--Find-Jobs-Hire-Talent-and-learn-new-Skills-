import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"
import { UserAuth } from '../AuthContext';


const Home = () => {

  const { logOut, user } = UserAuth();

  

  return (
    <div>
       <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      {/* <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button> */}
      <Typography sx={{ margin:"5%" }} variant="h3" align="center" >
        Get Hired or Hire people for free!
      </Typography>
      <div>
        { <ul className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"> 
          
          <Button sx={{ margin:"2% 3%"}} variant="outlined">
            <Link to="/employer/dashboard">
              Hire talent
            </Link>
            </Button>
         
         
          <Button sx={{ margin:"2% 3%"}} variant="outlined">
            <Link to="/employee/feed">
              Get Job Now
            </Link>
            </Button>
        
         
          <Button sx={{ margin:"2% 3%"}} variant="outlined">
            <Link to="/employee/Chat">
              ChatBot
            </Link>
            </Button>
         
    </ul>
}</div>
      </div>
     
  );
};

export default Home;
