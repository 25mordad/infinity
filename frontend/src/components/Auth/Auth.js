import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  signup , signin } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

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
      <div>
      <form onSubmit={handleSubmit}>
        { isSignup && (
        <label>
          <p>Name</p>
          <input name="name" type="text" onChange={handleChange} />
        </label>
        )}
        <label>
          <p>Email</p>
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <label>
          <p>Password </p>
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button onClick={switchMode}>
              { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
            </button></div>

  );
}

export default Auth;
