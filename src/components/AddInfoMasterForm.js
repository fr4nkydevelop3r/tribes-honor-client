import React from 'react';
import { useForm } from 'react-hook-form';
import Places from './Places';
import axios from 'axios';

const AddInfoMasterForm = ({ dataTribe }) => {
  const { register, handleSubmit, errors, setValue: setValueForm } = useForm();
  const onSubmit = (data) => {
    const { name, category, description, mision, outcome } = dataTribe;
    const { location, video } = data;

    /*console.log(name);
    console.log(category);
    console.log(description);
    console.log(mision);
    console.log(outcome);
    console.log(location);
    console.log(video);*/

    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/add-tribe`,
      data: { name, category, description, mision, outcome, location, video },
    })
      .then((response) => {
        console.log('TRIBE ADDED SUCCESFULLY', response);
      })
      .catch((error) => {
        console.log('ADD TRIBE ERROR', error.response);
        //toast.error(error.response.data.error);
      });
  };

  //add toast
  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off">
        <h1 className="title-form">Add Tribe</h1>

        <div className="first-row">
          <label className="field-name">TRIBE LOCATION</label>
          <Places register={register} setValueForm={setValueForm} />
          {errors.location && (
            <span className="error">Tribe's location is required</span>
          )}
        </div>
        <div className="row">
          <label className="field-name">YOUR YOUTUBE VIDEO</label>
          <textarea
            className="field-input"
            placeholder="Paste the link of your video introducing yourself"
            ref={register({
              required: true,
              pattern: /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/,
            })}
            name="video"
          />{' '}
          {errors.video && (
            <span className="error">
              A video introducing yourself is required
            </span>
          )}
        </div>
        <div className="btn-form">
          <button className="btn-auth" type="submit">
            Add Tribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInfoMasterForm;
