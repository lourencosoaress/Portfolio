import React, { useState } from 'react';
import './FilterButton.css';
import { PROJECTS_DATA } from '../../../utils/data';

function FilterButton({ menuItems, filterItems, setItems }) {
  const [activeCategory, setActiveCategory] = useState('');

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    filterItems(category);
  };

  return (
    <div className="filter-btn-container">
      {menuItems.map((category, index) => (
        <button
          key={index}
          className={`filter-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => handleFilterClick(category)}
        >
          {category}
        </button>
      ))}

      <button
        className={`filter-button ${activeCategory === '' ? 'active' : ''}`}
        onClick={() => {
          setItems(PROJECTS_DATA);
          setActiveCategory('');
        }}
      >
        All
      </button>
    </div>
  );
}

export default FilterButton;
