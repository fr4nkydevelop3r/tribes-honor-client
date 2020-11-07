import React from 'react';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  Hits,
  Highlight,
  ClearRefinements,
  RefinementList,
  SortBy,
  Pagination,
} from 'react-instantsearch-dom';

import { CustomSearchBox } from './SearchBox';
import { CustomCategoryFilter } from './RefinementList';
import TribuCardMiniature from '../TribuCardMiniature';

const searchClient = algoliasearch(
  'MV4WTJBV06',
  `${process.env.REACT_APP_ALGOLIA}`,
);

const Search = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="dev_TRIBES">
        <Header />
        <Content />
        <Pagination />
      </InstantSearch>
    </>
  );
};

const Header = () => (
  <header className="header">
    <CustomSearchBox
      translations={{ placeholder: 'Search for tribes around the world' }}
      submit={<span>🔍</span>}
      showLoadingIndicator
    />
  </header>
);

const Content = () => (
  <div className="results-container">
    <CustomCategoryFilter attribute={'category'} />
    <Hits hitComponent={TribuCardMiniature} />
  </div>
);

export default Search;
