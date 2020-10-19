import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from '../Layout';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    buttonText: 'Submit',
  });

  const { name, email, password, buttonText } = values;

  const handleChange = (value) => (event) => {
    setValues({ ...values, [value]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/signup`,
      data: { name, email, password },
    })
      .then((response) => {
        console.log('EMAIL SENT SUCCESSFULLY WITH LINK AND TOKEN', response);
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          buttonText: 'Submited',
        });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log('SIGNUP ERROR', error.response.error);
        setValues({ ...values, buttonText: 'Submit' });
        toast.error(error.response.data.error);
      });
  };

  const signupForm = () => (
    <div className="signup-container">
      <form className="form">
        {<h1 className="title-form">Create account</h1>}
        <div className="first-row">
          <label>FULL NAME</label>
          <input onChange={handleChange('name')} type="text" value={name} />
        </div>
        <div className="row">
          <label>Email</label>
          <input onChange={handleChange('email')} type="email" value={email} />
        </div>
        <div className="row">
          <label>PASSWORD</label>
          <input
            onChange={handleChange('password')}
            type="password"
            value={password}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            {buttonText}
          </button>
        </div>
        <Link to="/auth/password/forgot"> Forgot password</Link>
      </form>
    </div>
  );

  return (
    <Layout>
      <ToastContainer />
      {isAuth() ? <Redirect to="" /> : null}
      {signupForm()}
    </Layout>
  );
};

export default Signup;
