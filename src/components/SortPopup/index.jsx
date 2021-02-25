import React from 'react';
import PropTypes from 'prop-types';

import { PopupMenu } from '../';

const SortPopup = ({ sortBy, onSelect }) => {
  const items = [
    { value: 'rating', label: 'popular' },
    { value: 'price', label: 'price' },
    { value: 'name', label: 'A-Z' },
  ];
  const selected = items.find(obj => obj.value === sortBy);
  return (
    <div className="sort">
      <PopupMenu onClick={onSelect} activeItem={selected.value} items={items}>
        <div className="sort__label">
          <b>Sort by:</b>
          <span>{selected.label}</span>
        </div>
      </PopupMenu>
    </div>
  );
};

SortPopup.propTypes = {
  sortBy: PropTypes.string,
  onSelect: PropTypes.func,
};

SortPopup.defaultProps = {
  sortBy: 'rating',
};

export default SortPopup;
