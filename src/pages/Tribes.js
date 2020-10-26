import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTribes } from '../actions/tribes';
import Layout from '../components/Layout';
import TribuCardMiniature from '../components/TribuCardMiniature';
const Tribes = ({ getTribes }) => {
  useEffect(() => {
    getTribes();
  }, []);

  return (
    <Layout>
      <h3 className="title">Tribes around the world</h3>
      <div className="tribes-container">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <TribuCardMiniature key={item} />
        ))}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  tribes: state.profile,
});

export default connect(mapStateToProps, { getTribes })(Tribes);
