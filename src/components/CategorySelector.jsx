import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CategorySelector = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'light' : 'secondary'}
          onClick={() => handleSelect(category)}
          className="m-2 mb-5"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

CategorySelector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CategorySelector;
