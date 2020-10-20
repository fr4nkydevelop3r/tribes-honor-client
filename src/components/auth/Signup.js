import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { isAuth } from './helpers';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from '../Layout';

const Signup = () => {
  /*const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    buttonText: 'Signup',
  });

  const { name, email, password, buttonText } = values; */

  const [successSignUp, setSuccessSignUp] = useState(false);

  //form validation
  const { register, handleSubmit, watch, errors } = useForm();

  /*const handleChange = (value) => (event) => {
    setValues({ ...values, [value]: event.target.value });
  };*/

  const onSubmit = (data) => {
    const { name, email, password } = data;
    console.log(name, email, password);

    //setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/signup`,
      data: { name, email, password },
    })
      .then((response) => {
        console.log('EMAIL SENT SUCCESSFULLY WITH LINK AND TOKEN', response);
        toast.success(response.data.message);
        setSuccessSignUp(true);
      })
      .catch((error) => {
        console.log('SIGNUP ERROR', error.response.error);
        //setValues({ ...values, buttonText: 'Signup' });
        toast.error(error.response.data.error);
      });
  };

  const signupForm = () => (
    <div className="signup-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {<h1 className="title-form">Create account</h1>}
        <div className="first-row">
          <label className="field-name">FULL NAME</label>
          <input
            className="field-input"
            // onChange={handleChange('name')}
            type="text"
            // value={name}
            placeholder="Enter your name"
            ref={register({ required: true })}
            name="name"
          />
          {errors.name && <span className="error">This field is required</span>}
        </div>
        <div className="row">
          <label className="field-name">EMAIL</label>
          <input
            className="field-input"
            // onChange={handleChange('email')}
            type="email"
            //value={email}
            placeholder="Your email goes here"
            name="email"
            ref={register({
              required: 'Enter your e-mail',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid e-mail address',
              },
            })}
          />
          {errors.email && (
            <span className="error">Please enter a valid email</span>
          )}
        </div>
        <div className="row">
          <label className="field-name">PASSWORD</label>
          <input
            className="field-input"
            // onChange={handleChange('password')}
            type="password"
            // value={password}
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            ref={register({ required: true, minLength: 6 })}
            name="password"
          />
          {errors.password && (
            <span className="error">
              The password must be at least 6 characters
            </span>
          )}
        </div>
        <div className="btn-form">
          <button className="btn" type="submit">
            Sign Up
          </button>
        </div>
        <p className="login">
          Already have an account? <Link to="/signin"> Log in</Link>{' '}
        </p>
      </form>
    </div>
  );

  return (
    <Layout>
      <ToastContainer />
      {isAuth() ? <Redirect to="" /> : null}
      {!successSignUp ? (
        signupForm()
      ) : (
        <>
          <div>Great! Check your inbox to activate your account</div>
        </>
      )}
    </Layout>
  );
};

export default Signup;
