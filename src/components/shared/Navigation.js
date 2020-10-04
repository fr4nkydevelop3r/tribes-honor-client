import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {isAuth, signout} from '../auth/helpers'


const Navigation = ({match, history}) => {

    const isActive = path => {

        if(match.path === path){
            return { color: 'pink' }
        } else{
            return { color: 'green' }
        }

    }

    return (
        <>
            <ul>
                <li>
                    <Link to="/" style={isActive('/')} >Home</Link>
                </li>
               {!isAuth() && (
                <><li>
                    <Link to="/signin" style={isActive('/signin')}>Signin</Link>
                </li>
                <li>
                    <Link to="/signup" style={isActive('/signup')}>Signup</Link>
                </li> </>
               )}

               {isAuth() && isAuth().role === 'admin' && (
                <li>
               <Link style={isActive('/admin')} to="/admin">{isAuth().name} </Link>
                </li>
              
               )}

               {isAuth() && isAuth().role === 'subscriber' && (
                <li>
                        <Link style={isActive('/private')} to="private">{isAuth().name}</Link>
                </li>
              
               )}

               {isAuth() && (
                <li onClick={ () => {
                    signout(() => {
                        history.push('/');
                    })
                }}> Logout </li>
              
               )}
             
            </ul>
        </>
    )
}

export default withRouter(Navigation);