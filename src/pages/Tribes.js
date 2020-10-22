import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTribes } from '../actions/tribes';
import Layout from '../components/Layout';
import Card from '../components/Card';
const Tribes = ({ getTribes, tribes }) => {
  useEffect(() => {
    getTribes();
  }, []);

  console.log(tribes);

  return (
    <Layout>
      <h3 className="title">Tribes around the world</h3>
      <Card />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  tribes: state.profile,
});

export default connect(mapStateToProps, { getTribes })(Tribes);
