import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  signup , signin } from '../../actions/auth';
import { useHistory } from 'react-router-dom';
import ricpic from "../../images/ricpic.png";
import './style.css';

const initialState = { name: '', email: '', password: '' };

const Auth = ({ }) => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }


  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
      setForm(initialState);
      setIsSignup(!isSignup);
    };

  return (
     <div className =" my4">
      <div className ="lg-col-7 md-col-10  margin-auto flex flex-wrap rick-border ">
       <div className ="lg-col-5 md-col-5 sm-col-6 xs-col-12 py2 pb4 ">
        <div>

        <form   className ="contact-form"   onSubmit={handleSubmit}>
        { isSignup && (
        <label  className =" form-control" >
          <p className ="heavy" >Name</p>
          <input  className =" form-control" name="name" type="text" onChange={handleChange} />
        </label>
        )}
        <label>
        <p className ="heavy" >Email</p>
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
        <p className ="heavy" >Password </p>
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <div className ="py2">
        <input type="submit" name="submit" />
        </div>
     
      <button onClick={switchMode}>
              { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
       </button>
       </form>
        </div>
       </div>
       <div className =" xs-hide  lg-col-7 md-col-7 sm-col-6 xs-col-12 ">
       <img  className =" responsive " src={ricpic} />  
       </div>
       </div>
     </div>
  );
}

export default Auth;
