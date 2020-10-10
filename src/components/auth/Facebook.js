import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from 'axios';


const Facebook = ({informParent}) => {


    const responseFacebook = (response) => {
        axios({
            method : 'POST',
            url: `${process.env.REACT_APP_API}/facebook-login`,
            data: {userID: response.userID, accessToken: response.accessToken}
        })
        .then(response => {
            alert('SUCCESS')
            console.log('FACEBOOK SIGNIN SUCCESS', response);
            informParent(response);
        })
        .catch(error => {
            alert('ERROR')
            alert('FACEBOOK SIGNIN ERROR', error)
            console.log('FACEBOOK SIGNIN ERROR', error.response);
        }) 
    }

    return (
        <div>
            <FacebookLogin
                appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                disableMobileRedirect={true}
                render={renderProps => (
                    <button onClick={renderProps.onClick}>Login with facebook</button>
                )}
            />        
        </div>
    )

}

export default Facebook;