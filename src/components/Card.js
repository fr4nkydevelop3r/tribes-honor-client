import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserSecret,
  faMedal,
  faUsers,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';

const Card = () => {
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

  console.log(padawans);

  const getTribuInfo = () => {
    switch (tribuOption) {
      case 'about':
        return (
          <div className="about">
            <h4>About</h4>
            <p>
              lkodfko fkasflas fdalkdfkasl lkodfko fkasflas fdalkdfkasl lkodfko
              fkasflas fdalkdfkasl lkodfko fkasflas fdalkdfkasl lkodfko fkasflas
              fdalkdfkasl lkodfko fkasflas fdalkdfkasl lkodfko fkasflas
              fdalkdfkasl lkodfko fkasflas fdalkdfkasl lkodfko fkasflas
              fdalkdfkasl
            </p>
          </div>
        );
      case 'mision':
        return (
          <div className="mision">
            <h4>Mision</h4>
            <p>
              kjfdksdnf fjskdfksa fdsjkadfjska fsdjkfjdsak jkfsdjksa fdsjkfjsdaf
              fjksdjfkds jfksdjfksf fsjdkfjskf fjksdfjsk
            </p>
          </div>
        );
      case 'outcome':
        return (
          <div className="outcome">
            <h4>Outcome</h4>
            <p>
              kjfdksdnf fjskdfksa fdsjkadfjska fsdjkfjdsak jkfsdjksa fdsjkfjsdaf
              fjksdjfkds jfksdjfksf fsjdkfjskf fjksdfjsk
            </p>
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
              {padawans.map((item) => {
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
          <span>Houston, TX</span>
        </div>
        <div className="card-body">
          <h3>Tribe name</h3>
          <span className="category">#category</span>
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

export default Card;
