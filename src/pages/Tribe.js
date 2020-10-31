import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getTribe } from '../actions/tribe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserSecret,
  faMedal,
  faUsers,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';

const Tribe = ({ location, match, getTribe }) => {
  useEffect(() => {
    if (!location.state) {
      const { idTribe } = match.params;
      getTribe(idTribe);
    }
  }, []);

  const [tribuOption, setTribuOption] = useState('about');
  const master = 'https://picsum.photos/100/100';
  const padawans = [
    'https://picsum.photos/100/100',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/100/100',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/100/100',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
  ];
  let cardImage = {
    backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/test-food-app-d7eca.appspot.com/o/products%2FPunk_still.jpg?alt=media&token=b3304a2b-9df0-4680-90f9-2273bd09ee0e')`,
  };

  const tribe = useSelector((state) => state.tribe) || location.state.tribe;

  const {
    _id: idTribe,
    name,
    description,
    category,
    mision,
    members,
    outcome,
    location: locationTribe,
  } = tribe;
  console.log(locationTribe);
  //console.log(location);

  const getTribuInfo = () => {
    switch (tribuOption) {
      case 'about':
        return (
          <div className="about">
            <h4>About</h4>
            <p>{description}</p>
          </div>
        );
      case 'mision':
        return (
          <div className="mision">
            <h4>Mision</h4>
            <p>{mision}</p>
          </div>
        );
      case 'outcome':
        return (
          <div className="outcome">
            <h4>Outcome</h4>
            <p>{outcome}</p>
          </div>
        );
      case 'tribe':
        return (
          <div className="tribe">
            <h4>Our tribe</h4>
            <div className="masterContainer">
              <div>
                <img src={master}></img>
              </div>
              <div>
                <span> Juan / Master</span>
              </div>
            </div>
            <div className="padawansContainer">
              {members.map((item) => {
                return <img src={master}></img>;
              })}
            </div>
          </div>
        );
    }
  };

  const handleOption = (e) => {
    console.log(e.target.nodeName);

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
      <div className="card">
        <div className="card-image" style={cardImage}></div>
        <div className="card-city">
          <span>{locationTribe}</span>
        </div>
        <div className="card-body">
          <div className="card-header">
            <div className="category-container">
              <h4>{name}</h4>
              <span className="category">#{category}</span>
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
    </>
  );
};

export default connect(null, { getTribe })(Tribe);
