import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {isAuth} from './helpers';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from '../Layout';



const Signup = () => {

    const [values, setValues] = useState({
        name: 'Frank',
        email: 'fr4nky.develop3r@gmail.com',
        password: '',
        buttonText: 'Submit'
    })

    const {name, email, password, buttonText} = values;

    const handleChange = (value) => (event) => {
        setValues({...values, [value]:event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setValues({...values, buttonText: 'Submitting'});
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data: {name, email, password}
        })
        .then(response => {
            console.log('EMAIL SENT SUCCESSFULLY WITH LINK AND TOKEN', response);
            setValues({...values, name: '', email: '', 'password': '', buttonText: 'Submited' });
            toast.success(response.data.message);
        })
        .catch(error => {
            console.log('SIGNUP ERROR', error.response.error);
            setValues({...values, buttonText: 'Submit'});
            toast.error(error.response.data.error);
        })
    }

    const signupForm = () => (
        <form>
            <div>
                <label>Name</label>
                <input  onChange={handleChange('name')} type="text" value={name}/>
            </div>
            <div>
                <label>Email</label>
                <input  onChange={handleChange('email')} type="email" value={email} />
            </div>
            <div>
                <label>Password</label>
                <input  onChange={handleChange('password')} type="password" value={password} />
            </div>
            <div>
                <button type="submit" onClick={handleSubmit}>{buttonText}</button>
            </div>
        </form>
    )

    return (
        <Layout>
            <ToastContainer />
            {isAuth() ? <Redirect to=""/> : null}
            <h1>Signup</h1>
            {signupForm()}
        </Layout>
    )
}

export default Signup;