import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getTribe } from '../actions/tribe';
import { getMembers } from '../actions/members';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserSecret,
  faMedal,
  faUsers,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import BackNavigation from '../components/BackNavigation';

const Tribe = ({ match, getTribe, getMembers }) => {
  useEffect(() => {
    const { idTribe } = match.params;
    getTribe(idTribe);
    getMembers(idTribe);
  }, []);

  const tribe = useSelector((state) => state.tribe);
  const members = useSelector((state) => state.members);

  const [tribuOption, setTribuOption] = useState('about');
  const master = 'https://picsum.photos/100/100';

  let cardImage = {
    backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/test-food-app-d7eca.appspot.com/o/products%2FPunk_still.jpg?alt=media&token=b3304a2b-9df0-4680-90f9-2273bd09ee0e')`,
  };

  const getTribuInfo = () => {
    switch (tribuOption) {
      case 'about':
        return (
          <div className="about">
            <h4>About</h4>
            <p>{tribe.description}</p>
          </div>
        );
      case 'mision':
        return (
          <div className="mision">
            <h4>Mision</h4>
            <p>{tribe.mision}</p>
          </div>
        );
      case 'outcome':
        return (
          <div className="outcome">
            <h4>Outcome</h4>
            <p>{tribe.outcome}</p>
          </div>
        );
      case 'tribe':
        return (
          <div className="tribe">
            <h4>Our tribe</h4>
            <div className="master-container">
              <div>
                <img src={master}></img>
              </div>
              <div>
                <span> Juan / Master</span>
              </div>
            </div>
            <div className="members-container">
              {Object.values(members).map((item, index) => {
                return <img src={item.photo} key={index}></img>;
              })}
            </div>
          </div>
        );
    }
  };

  const handleOption = (e) => {
    switch (e.target.nodeName) {
      case 'SPAN':
        setTribuOption(e.target.attributes.getNamedItem('data-option').value);
        break;
      case 'path':
        setTribuOption(
          e.target.parentNode.parentNode.attributes.getNamedItem('data-option')
            .value,
        );
        break;
      case 'svg':
        setTribuOption(
          e.target.parentNode.attributes.getNamedItem('data-option').value,
        );
        break;
    }
  };

  return (
    <>
      <Layout>
        <BackNavigation />{' '}
        {tribe ? (
          <div className="card">
            <div className="card-image" style={cardImage}></div>
            <div className="card-city">
              <span>{tribe.location}</span>
            </div>
            <div className="card-body">
              <div className="card-header">
                <div className="category-container">
                  <h4>{tribe.name}</h4>
                  <span className="category">#{tribe.category}</span>
                </div>
                <div className="categoryJoin">
                  <button type="button" className="btn-card">
                    JOIN
                  </button>
                </div>
              </div>

              {getTribuInfo()}
            </div>
            <div className="card-options">
              <span data-option="about" onClick={handleOption}>
                {' '}
                <FontAwesomeIcon
                  icon={faFileAlt}
                  color={tribuOption === 'about' ? '#ffd166' : '#fff'}
                />
              </span>
              <span data-option="mision" onClick={handleOption}>
                {' '}
                <FontAwesomeIcon
                  icon={faUserSecret}
                  color={tribuOption === 'mision' ? '#ffd166' : '#fff'}
                />
              </span>
              <span data-option="outcome" onClick={handleOption}>
                <FontAwesomeIcon
                  icon={faMedal}
                  color={tribuOption === 'outcome' ? '#ffd166' : '#fff'}
                />
              </span>
              <span data-option="tribe" onClick={handleOption}>
                <FontAwesomeIcon
                  icon={faUsers}
                  color={tribuOption === 'tribe' ? '#ffd166' : '#fff'}
                />
              </span>
            </div>
          </div>
        ) : (
          <div>Cargando...</div>
        )}
      </Layout>
    </>
  );
};

export default connect(null, { getTribe, getMembers })(Tribe);
