import React, { useRef, useState } from 'react';
import usePlacesAutocomplete, { getGeocode } from 'use-places-autocomplete';

const Places = ({ register, setValueForm }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  const [activeOption, setActiveOption] = useState(0);
  const ref = useRef();

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    console.log(description);
    setValueForm('location', description, {
      shouldValidate: true,
      shouldDirty: true,
    });
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => {
        const addressComponents = results[0].address_components;
        const formatted_address = results[0].formatted_address;
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  const renderSuggestions = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    data.map((suggestion, index) => {
      const {
        id,
        structured_formatting: {
          main_text: mainText,
          secondary_text: secondaryText,
        },
      } = suggestion;

      return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          key={index}
          onClick={handleSelect(suggestion)}
          style={{
            color: index === activeOption ? '#118ab2' : 'gray',
          }}>
          <strong>{mainText}</strong>
          <small> {secondaryText}</small>
        </li>
      );
    });

  const onKeyDown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 38) {
      if (activeOption === 0) return;
      setActiveOption(activeOption - 1);
    }
    if (e.keyCode === 40) {
      if (data.length - 1 === activeOption) return;
      setActiveOption(activeOption + 1);
    }
  };

  console.log(data);
  return (
    <>
      <div ref={ref} className="places-container">
        <input
          onChange={handleInput}
          disabled={!ready}
          placeholder="Tribes Location"
          onFocus={handleInput}
          className="field-input input-place"
          onKeyDown={onKeyDown}
          ref={register({ required: true })}
          name="location"
        />
        <ul className="list-suggestions">{renderSuggestions()}</ul>
      </div>
    </>
  );
};

export default Places;
