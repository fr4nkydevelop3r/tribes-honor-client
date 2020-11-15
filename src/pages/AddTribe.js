import React from 'react';
import Layout from '../components/Layout';
import Places from '../components/Places';
import Autocomplete from '../components/Autocomplete';

const AddTribe = () => {
  return (
    <>
      <Layout>
        <div className="form-container">
          <form className="form">
            <h1 className="title-form">Add Tribe</h1>
            <div className="first-row">
              <label className="field-name">TRIBE NAME</label>
              <input
                className="field-input"
                // onChange={handleChange('name')}
                type="text"
                // value={name}
                placeholder="Enter the tribe name"
                name="name"
              />
            </div>
            <div className="row">
              <label className="field-name">Category</label>
              <Autocomplete />
            </div>
            <div className="row">
              <label className="field-name">LOCATION</label>
              <Places />
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default AddTribe;
