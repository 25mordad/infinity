import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import {  useLocation } from 'react-router-dom';


const Navbar = ({ }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();



  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    //
    // history.push('/auth');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);


  return (
    <div>
    
    {user?.result ? (
        <div>
        <h3>{user?.result.name}</h3>
          <button  onClick={logout}>Logout</button>
        </div>
      ) : (
        <a href="/auth" >User Auth</a>
      )}
    </div>
  );
}

export default Navbar;
