import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import {  useLocation } from 'react-router-dom';
import logo from "../../images/logo.jpg";



const Navbar = () => {
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
    <div className =" container  content-width flex flex-wrap  mt4 pt2 " >

      <div className ="lg-col-1 md-col-1 sm-col-2 xs-col-3  left" >
      <a  href="/" ><img  alt="logo" className =" responsive " src={logo} />  </a>
      </div>

      <div className ="lg-col-11  md-col-11  sm-col-10 xs-col-9 right   pt4 right-text " >

      {user?.result ? (
        <div className =" flex flex-wrap right mt4 pt4 " >
          <br/>
        <h3 className =" mr2 pr2"> Hello {user?.result.name}</h3>
          <button  className =" btn btn-default pt4 "  onClick={logout}>Logout</button>
        </div>
      ) : (
        <a className =" btn btn-default"  href="/auth" >Login</a>
      )}
      </div>


    </div>
  );
}

export default Navbar;
