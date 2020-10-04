import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from '../Layout';


const Activate = ({match}) => {

    const [values, setValues] = useState({
        name: '',
        token: '',
        show: true
    })

    useEffect(() => {
        let token = match.params.token;
        let {name} = jwt.decode(token);
        if(token){
            setValues({...values, name, token});
        }
    }, [])  

    const {name, token, show} = values;
 

    const clickSubmit = event => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/account-activation`,
            data: {token}
        })
        .then(response => {
            console.log('ACCOUNT ACTIVATION', response);
            setValues({...values, show: false });
            toast.success(response.data.message);
        })
        .catch(error => {
            console.log('ACCOUNT ACTIVATION ERROR', error.response.data.error);
            toast.error(error.response.data.error);
        })
    }

    const activationLink = () => (
        <div>
            <h1>Hey {name}, Ready to activate your account?</h1>
            <button onClick={clickSubmit}>Activate account</button>
        </div>
    )

    return (
        <Layout>
            <ToastContainer />
            {activationLink()}
        </Layout>
    )
}

export default Activate;