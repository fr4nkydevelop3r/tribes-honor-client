import React from 'react';
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';

const CategoryFilter = ({ items, refine }) => {
  return (
    <ul className="filter-list">
      {items.map((item) => (
        <li key={item.label} className="list-item">
          <label
            style={{ fontWeight: item.isRefined ? 'bold' : '' }}
            className="checkbox">
            <span className="checkbox__input">
              <input
                type="checkbox"
                onClick={(event) => refine(item.value)}
                className="checkbox"
                name="checkbox"
              />
              <span className="checkbox__control">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M1.73 12.91l6.37 6.37L22.79 4.59"
                  />
                </svg>
              </span>
            </span>

            <span className="radio__label">
              <span>
                {item.label} {item.count}
              </span>
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export const CustomCategoryFilter = connectRefinementList(CategoryFilter);
