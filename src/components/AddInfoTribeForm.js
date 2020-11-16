import React, { useState } from 'react';
import Autocomplete from './Autocomplete';
import { useForm } from 'react-hook-form';

const AddInfoTribeForm = ({ handleForms }) => {
  const { register, handleSubmit, errors, setValue } = useForm();
  const onSubmit = (data) => {
    handleForms(data);
  };

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off">
        <h1 className="title-form">Add Tribe</h1>
        <div className="first-row">
          <label className="field-name">TRIBE NAME</label>
          <input
            className="field-input"
            type="text"
            ref={register({ required: true })}
            placeholder="Enter the tribe name"
            name="name"
          />
          {errors.name && (
            <span className="error">Tribe's name is required</span>
          )}
        </div>
        <div className="row">
          <label className="field-name">CATEGORY</label>
          <Autocomplete register={register} setValue={setValue} />{' '}
          {errors.category && (
            <span className="error">Tribe's category is required</span>
          )}
        </div>
        <div className="row">
          <label className="field-name">DESCRIPTION</label>
          <textarea
            className="field-input"
            placeholder="What is this tribe about?"
            ref={register({ required: true })}
            name="description"
          />{' '}
          {errors.description && (
            <span className="error">A description is required</span>
          )}
        </div>
        <div className="row">
          <label className="field-name">MISION</label>
          <textarea
            className="field-input"
            placeholder="What people need to do to get into the tribe?"
            ref={register({ required: true })}
            name="mision"
          />{' '}
          {errors.mision && <span className="error">A mision is required</span>}
        </div>
        <div className="row">
          <label className="field-name">OUTCOME</label>
          <textarea
            className="field-input"
            placeholder="What the members are going to get after completing the graduation?"
            ref={register({ required: true })}
            name="outcome"
          />{' '}
          {errors.outcome && (
            <span className="error">An outcome is required</span>
          )}
        </div>
        {/*} <div className="row">
        <label className="field-name">LOCATION</label>
        <Places />
      </div> */}
        <div className="btn-form">
          <button className="btn-auth" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInfoTribeForm;
