import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import {  useLocation } from 'react-router-dom';
import logo from "../../images/logo.png";


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
    <div className =" container content-width flex flex-wrap rick-border mt4 my4 p3  " >

      <div className =" lg-col-2 md-col-3 sm-col-4 xs-col-6  left" >
      <img  className =" responsive " src={logo} />  
      </div>

      <div className =" lg-col-10 md-col-9s sm-col-8 xs-col-6 right right-text " >

      {user?.result ? (
        <div className =" flex flex-wrap  right  " >
        <h3 className =" mr2  "> Hello {user?.result.name}</h3>
          <button  className =" btn btn-default"  onClick={logout}>Logout</button>
        </div>
      ) : (
        <a href="/auth" >User Auth</a>
      )}
      </div>
    
    
    </div>
  );
}

export default Navbar;
