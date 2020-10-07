import React, {useState, useEffect} from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import Layout from '../Layout';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Reset = ({match}) => {

    const [values, setValues] = useState({
        name: '',
        token: '',
        newPassword: '',
        buttonText: 'Request password reset link'
    })

    useEffect(() => {
        let token = match.params.token;
        const {name} = jwt.decode(token);
        console.log(name);
        if(token){
            setValues({...values, name, token});
        }
    }, []);

    const {name, token,  buttonText, newPassword} = values;

    const handleChange =  (event) => {    
        setValues({...values, newPassword: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setValues({...values, buttonText: 'Submitting'});
       axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/reset-password`,
            data: {newPassword, resetPasswordLink: token}
        })
        .then(response => {
            console.log('FORGOT PASSWORD SUCESS', response);
            toast.success(response.data.message)
            setValues({...values, buttonText: 'Done'});
        
        })
        .catch(error => {
            console.log('RESET PASSWORD  ERROR', error.response.error);
            toast.error(error.response.data.error);
            setValues({...values, buttonText: 'Reset password'});
        })
    }

    const resetPasswordForm = () => (
        <form>
            <div> 
                <label>Password Reset</label>
                <input  onChange={handleChange} type="password" value={newPassword} placeholder="Type new password" required/>
            </div>
            <div>
                <button type="submit" onClick={handleSubmit}>{buttonText}</button>
            </div>
        </form>
    )

    return (
        <Layout>
            <ToastContainer />
            <h1>Hey {name}, please type your new password</h1>
            <h1>Reset Password</h1>
            {resetPasswordForm()}
        </Layout>
    )
}

export default Reset;