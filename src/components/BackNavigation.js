import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
const BackNavigation = () => {
  return (
    <>
      <div className="back-navigation-container">
        <Link to={'/tribes'}>
          <span className="icon">
            <FontAwesomeIcon icon={faLongArrowAltLeft} />
          </span>
        </Link>
      </div>
    </>
  );
};

export default BackNavigation;
