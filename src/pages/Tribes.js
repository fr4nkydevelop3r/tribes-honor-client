import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTribes } from '../actions/tribes';
import Layout from '../components/Layout';

const Tribes = ({ getTribes, tribes }) => {
  useEffect(() => {
    getTribes();
  }, []);

  console.log(tribes);

  return (
    <Layout>
      <h1>Tribes around the world</h1>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  tribes: state.profile,
});

export default connect(mapStateToProps, { getTribes })(Tribes);
