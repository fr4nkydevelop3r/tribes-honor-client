import React from 'react';
import Navigation from './shared/Navigation'
const Layout = ({children}) => {

    return (
        <>
            <Navigation />
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default Layout;