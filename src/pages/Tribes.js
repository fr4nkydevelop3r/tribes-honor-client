import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getTribes } from '../actions/tribes';
import Layout from '../components/Layout';
import TribuCardMiniature from '../components/TribuCardMiniature';
const Tribes = ({ getTribes }) => {
  useEffect(() => {
    getTribes();
  }, []);

  let tribes = useSelector((state) => state.tribes);
  if (Object.keys(tribes).length > 0) {
    tribes = Object.values(tribes);
  }

  return (
    <Layout>
      <h3 className="title">Tribes around the world</h3>
      {tribes.length > 0 ? (
        <div className="tribes-container">
          {tribes.map((tribe) => {
            return <TribuCardMiniature key={tribe._id} tribe={tribe} />;
          })}
        </div>
      ) : (
        <div>Spinner</div>
      )}
    </Layout>
  );
};

export default connect(null, { getTribes })(Tribes);
