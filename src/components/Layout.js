import React from 'react';
import Header from './shared/Header';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
