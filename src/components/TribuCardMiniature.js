import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobeAmericas,
  faHiking,
  faUsers,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

const TribuCardMiniature = ({
  tribeName,
  category,
  location,
  members,
  difficulty,
  rank,
}) => {
  return (
    <>
      <div className="tribe-card-miniature">
        <div className="tribe-name">
          <h4>The warriors</h4>
          <h5>#category</h5>
        </div>
        <div className="tribe-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faGlobeAmericas} color="#ffd166" />
            <span>Brooklyn, NY</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faUsers} color="#ffd166" />
            <span> 18 warriors </span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faHiking} color="#ffd166" />
            <span> Begginer</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faTrophy} color="#ffd166" />
            <span> Rank #F</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TribuCardMiniature;
