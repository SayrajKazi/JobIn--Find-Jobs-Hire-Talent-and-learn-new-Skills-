
import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1a0136] '>
      <h1 style={{ color: 'Indigo' }}  className='   text-center  text-2xl font-bold'>
        JobiN
      </h1>
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
    </div>
  );
};

export default Navbar;