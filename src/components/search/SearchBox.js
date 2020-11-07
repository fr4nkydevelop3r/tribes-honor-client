import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ currentRefinement, refine }) => (
  <form className="search-form" noValidate role="search">
    <input
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
      placeholder="Search tribes by city or category"
      className="search-input"
    />
    <button
      type="submit"
      className="search-btn"
      onClick={(e) => e.preventDefault()}>
      {' '}
      <FontAwesomeIcon icon={faSearch} color="#06d6a0" />
    </button>
  </form>
);

export const CustomSearchBox = connectSearchBox(SearchBox);
