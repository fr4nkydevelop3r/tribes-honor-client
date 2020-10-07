import React, {useState} from 'react';
import axios from 'axios';
import Layout from '../Layout';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Forgot = ({history}) => {

    const [values, setValues] = useState({
        email: 'fr4nky.develop3r@gmail.com',
        buttonText: 'Request password reset link'
    })

    const {email,  buttonText} = values;

    const handleChange = (value) => (event) => {
        setValues({...values, [value]:event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setValues({...values, buttonText: 'Submitting'});
       axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/forgot-password`,
            data: {email}
        })
        .then(response => {
            console.log('FORGOT PASSWORD SUCESS', response);
            toast.success(response.data.message)
            setValues({...values, buttonText: 'Requested'});
        
        })
        .catch(error => {
            console.log('FORGOT PASSWORD  ERROR', error.response.error);
            toast.error(error.response.data.error);
            setValues({...values, buttonText: 'Request Passwort Reset Link'});
        })
    }

    const passwordForgotForm = () => (
        <form>
            <div>
                <label>Email</label>
                <input  onChange={handleChange('email')} type="email" value={email} />
            </div>
            <div>
                <button type="submit" onClick={handleSubmit}>{buttonText}</button>
            </div>
        </form>
    )

    return (
        <Layout>
            <ToastContainer />
            <h1>Forgot Password</h1>
            {passwordForgotForm()}
        </Layout>
    )
}

export default Forgot;