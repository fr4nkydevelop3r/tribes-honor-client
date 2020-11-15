import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
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

  const handleSubmit = (event) => {
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
    <form>
      <div>
        <label>Email</label>
        <input onChange={handleChange('email')} type="email" value={email} />
      </div>
      <div>
        <label>Password</label>
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
    </form>
  );

  return (
    <Layout>
      <ToastContainer />
      {isAuth() ? <Redirect to="" /> : null}
      <h1>Signin</h1>
      <Google informParent={informParent} />
      <Facebook informParent={informParent} />
      {signinForm()}
      <Link to="/auth/password/forgot"> Forgot password</Link>
    </Layout>
  );
};

export default Signin;
