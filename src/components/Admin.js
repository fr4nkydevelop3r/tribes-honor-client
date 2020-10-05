import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {isAuth, getCookie, signout, updateUser} from '../components/auth/helpers';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from './Layout';



const Admin = ({history}) => {

    const [values, setValues] = useState({
        role: '',
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    })

    const token = getCookie('token');

    useEffect(() => {
        loadProfile();
    }, [])

    const loadProfile = () => {
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/user/${isAuth()._id}`,
                    headers: { Authorization: `Bearer ${token}` }

        })
        .then(response => {
            console.log('PRIVATE PROFILE UPDATE', response);
            const {role, name, email} = response.data;
            setValues({...values, role, name, email})

        })
        .catch(error => {
            console.log('PRIVATE PROFILE UPDATE ERROR', error);
            if(error.response.status === 401){
                console.log(error);
                signout(() => {
                    history.push('/');
                }); 
            }
        })
    }

    const {name, email, password, role, buttonText} = values;

    const handleChange = (value) => (event) => {
        setValues({...values, [value]:event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setValues({...values, buttonText: 'Submitting'});
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/admin/update`,
            headers: { Authorization: `Bearer ${token}` },
            data: {name, password}
        })
        .then(response => {
            console.log('PRIVATE PROFILE UPDATE SUCCESS', response);
             updateUser(response, () => {
                   setValues({...values, buttonText: 'Submited' });
                   toast.success('Profile updated succesfully');
             })    

        })
        .catch(error => {
            console.log('PRIVATE PROFILE UPDATE ERROR', error.response.data.error);
            setValues({...values, buttonText: 'Submit'});
            toast.error(error.response.data.error);
        })
    }

    const updateForm = () => (
        <form>
            <div>
                <label>Role</label>
                <input   type="text" value={role} disabled/>
            </div>
            <div>
                <label>Name</label>
                <input  onChange={handleChange('name')} type="text" value={name}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} disabled/>
            </div>
            <div>
                <label>Password</label>
                <input  onChange={handleChange('password')} type="password" value={password} />
            </div>
            <div>
                <button type="submit" onClick={handleSubmit}>{buttonText}</button>
            </div>
        </form>
    )

    return (
        <Layout>
            <ToastContainer />
            <h1>Admin</h1>
            <p>Profile update</p>
            {updateForm()}
        </Layout>
    )
}

export default Admin;
