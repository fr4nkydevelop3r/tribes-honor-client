import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const Google = ({ informParent }) => {
  const responseGoogle = (response) => {
    console.log(response);
    if (response.tokenId) {
      axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API}/google-login`,
        data: { idToken: response.tokenId },
      })
        .then((response) => {
          console.log('GOOGLE SIGNIN SUCCESS', response);
          alert('Hola');
          informParent(response);
        })
        .catch((error) => {
          alert(error.response);
          console.log('GOOGLE SIGNIN ERROR', error.response);
        });
    }
  };

  return (
    <div className="google-button-container">
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        buttonText="Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Google;
