import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobeAmericas,
  faHiking,
  faUsers,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

const TribuCardMiniature = ({ tribe }) => {
  const {
    _id: idTribe,
    name,
    category,
    members,
    difficulty,
    rank,
    location,
  } = tribe;

  return (
    <>
      <Link to={`/tribe/${idTribe}`} className="tribe-card-miniature-container">
        <div className="tribe-card-miniature">
          <div className="tribe-name">
            <h4>{name}</h4>
            <h5>#{category}</h5>
          </div>
          <div className="tribe-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faGlobeAmericas} color="#ffd166" />
              <span>{location}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faUsers} color="#ffd166" />
              <span> {members.length} members </span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faHiking} color="#ffd166" />
              <span> {difficulty}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faTrophy} color="#ffd166" />
              <span> Rank #{rank}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TribuCardMiniature;
