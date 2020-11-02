import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoLink }) => (
  <>
    <div className="player-wrapper">
      <ReactPlayer url={videoLink} width="100%" height="100%" controls={true} />
    </div>
  </>
);

export default VideoPlayer;
