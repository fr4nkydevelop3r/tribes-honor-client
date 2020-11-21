import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Google from './Google';
import Facebook from './Facebook';

import { authenticate, isAuth } from './helpers';
import isUserAuth from '../../actions/auth';
import Layout from '../Layout';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Signin = ({ history, match }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    buttonText: 'Submit',
  });

  //form validation
  const { register, handleSubmit, watch, errors } = useForm();

  const [pathName, setPathname] = useState(() => {
    return history.location.state ? history.location.state.from.pathname : '/';
  });

  const dispatch = useDispatch();

  const { email, password, buttonText } = values;

  const handleChange = (value) => (event) => {
    setValues({ ...values, [value]: event.target.value });
  };

  const informParent = (response) => {
    authenticate(response, () => {
      isAuth() && isAuth().role === 'admin'
        ? history.push('/admin')
        : history.push('private');
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/signin`,
      data: { email, password },
    })
      .then((response) => {
        console.log('SIGNIN SUCESS');
        const {
          data: { user },
        } = response;

        dispatch(isUserAuth(user));
        authenticate(response, () => {
          setValues({
            ...values,
            email: '',
            password: '',
            buttonText: 'Submited',
          });
          //toast.success(`Hey ${response.data.user.name}, Welcome back!`);
          isAuth() && isAuth().role === 'admin'
            ? history.push('/admin')
            : history.push(`${pathName}`);
        });
      })
      .catch((error) => {
        console.log('SIGNIN  ERROR', error);
        setValues({ ...values, buttonText: 'Submit' });
        toast.error(error.response.data.error);
      });
  };

  const signinForm = () => (
    <div className="form-container ">
      <form
        className="form "
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title-form">Signin</h1>
        <div className="first-row">
          <label className="field-name">Email</label>
          <input
            className="field-input"
            onChange={handleChange('email')}
            type="email"
            placeholder="Your email"
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
          <label className="field-name">Password</label>
          <input
            className="field-input"
            onChange={handleChange('password')}
            type="password"
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
          <button className="btn-auth" type="submit">
            {buttonText}
          </button>
        </div>
        <div className="forgot-password-container">
          <p className="forgot-password">
            Forgot Password?
            <Link to="/auth/password/forgot"> Reset password</Link>{' '}
          </p>
        </div>
      </form>
    </div>
  );

  return (
    <Layout>
      <ToastContainer />
      {isAuth() ? <Redirect to="" /> : null}
      {signinForm()}
      <div className="or-container">
        <hr /> <span>or</span> <hr />
      </div>
      <div className="signin-social-container">
        <h5 className="title-login-social">Sign in with</h5>
      </div>
      <div className="social-accounts">
        <Google informParent={informParent} />
        <Facebook informParent={informParent} />
      </div>
      <div className="no-account-container">
        <Link to="/signup"> Don't have an account yet?</Link>
      </div>
    </Layout>
  );
};

export default Signin;
