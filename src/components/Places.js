import React, { useRef } from 'react';
import usePlacesAutocomplete, { getGeocode } from 'use-places-autocomplete';

const Places = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useRef();

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => {
        const addressComponents = results[0].address_components;
        console.log(addressComponents);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  const renderSuggestions = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: {
          main_text: mainText,
          secondary_text: secondaryText,
        },
      } = suggestion;

      return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li key={id} onClick={handleSelect(suggestion)}>
          <strong>{mainText}</strong>
          <small> {secondaryText}</small>
        </li>
      );
    });

  return (
    <>
      <div ref={ref}>
        <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Tribes Location"
          onFocus={handleInput}
        />
        <ul>{renderSuggestions()}</ul>
      </div>
    </>
  );
};

export default Places;
