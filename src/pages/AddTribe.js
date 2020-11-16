import React, { useState } from 'react';
import Layout from '../components/Layout';
import AddInfoTribeForm from '../components/AddInfoTribeForm';
import AddInfoMasterForm from '../components/AddInfoMasterForm';
const AddTribe = () => {
  const [isInfoTribeReady, setIsInfoTribeReady] = useState(false);
  const [dataTribe, setDataTribe] = useState({});

  const handleForms = (dataTribe) => {
    setDataTribe(dataTribe);
    setIsInfoTribeReady(!isInfoTribeReady);
  };

  return (
    <>
      <Layout>
        {!isInfoTribeReady && <AddInfoTribeForm handleForms={handleForms} />}
        {isInfoTribeReady && <AddInfoMasterForm dataTribe={dataTribe} />}
      </Layout>
    </>
  );
};

export default AddTribe;
