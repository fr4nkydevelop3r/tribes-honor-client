import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuth, signout } from '../auth/helpers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ match, history }) => {
  const [showMenu, setShowMenu] = useState(false);

  const isActive = (path) => {
    if (match.path === path) {
      return { color: '#06d6a0' };
    } else {
      return { color: '#118ab2' };
    }
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar">
        <span className="navbar-toggle" onClick={handleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <Link className="logo" to="/">
          TribusMen
        </Link>
        <ul className={`main-nav ${showMenu ? 'active' : ''}`}>
          <li>
            <Link to="/" className="nav-links" style={isActive('/')}>
              Home
            </Link>
          </li>

          {!isAuth() && (
            <>
              <li>
                <Link
                  to="/tribes"
                  className="nav-links"
                  style={isActive('/tribes')}>
                  Tribes
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav-links"
                  style={isActive('/about')}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="nav-links"
                  style={isActive('/signin')}>
                  Signin
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="nav-links"
                  style={isActive('/signup')}>
                  Signup
                </Link>
              </li>{' '}
            </>
          )}

          {isAuth() && isAuth().role === 'admin' && (
            <li>
              <Link
                className="nav-links"
                style={isActive('/admin')}
                to="/admin">
                {isAuth().name}{' '}
              </Link>
            </li>
          )}

          {isAuth() && isAuth().role === 'subscriber' && (
            <li>
              <Link
                className="nav-links"
                style={isActive('/private')}
                to="private">
                {isAuth().name}
              </Link>
            </li>
          )}

          {isAuth() && (
            <li
              onClick={() => {
                signout(() => {
                  history.push('/');
                });
              }}>
              {' '}
              Logout{' '}
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default withRouter(Navigation);
