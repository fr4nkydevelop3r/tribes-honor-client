import React from 'react';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  SortBy,
  Pagination,
} from 'react-instantsearch-dom';
import TribuCardMiniature from './TribuCardMiniature';

const searchClient = algoliasearch(
  'MV4WTJBV06',
  `${process.env.REACT_APP_ALGOLIA}`,
);

const Search = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="dev_TRIBES">
        <Header />
        <div className="body-content">
          <Content />
        </div>
      </InstantSearch>
    </>
  );
};

const Header = () => (
  <header className="header">
    <SearchBox
      className="search-bar"
      translations={{ placeholder: 'Search for tribes around the world' }}
    />
  </header>
);

const Content = () => (
  <main>
    <div className="information"></div>
    <Hits hitComponent={TribuCardMiniature} />
    <div>
      {' '}
      <Pagination />
    </div>
  </main>
);

export default Search;
