import React from 'react';

const SortOptions = ({ onSortChange, selectedSort }) => {
  const handleSort = (sortOption) => {
    onSortChange(sortOption);  // Pass the selected option to the parent component
  };

  return (
    <div className="flex justify-start space-x-4 p-4">
      {/* Mobile View Dropdown */}
      <div className="sm:hidden w-full">
        <select
          onChange={(e) => handleSort(e.target.value)}
          value={selectedSort}
          className="w-full px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          <option value="name">Sort by Name</option>
          <option value="population">Sort by Population</option>
          <option value="region">Sort by Region</option>
          <option value="capital">Sort by Capital</option>
        </select>
      </div>

      {/* Desktop View Buttons */}
      <div className="hidden sm:flex space-x-4">
        {/* Sort by Name */}
        <button
          onClick={() => handleSort('name')}
          className={`px-4 py-2 rounded-full ${selectedSort === 'name' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'} focus:outline-none`}
        >
          Name
        </button>
        
        {/* Sort by Population */}
        <button
          onClick={() => handleSort('population')}
          className={`px-4 py-2 rounded-full ${selectedSort === 'population' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'} focus:outline-none`}
        >
          Population
        </button>

        {/* Sort by Region */}
        <button
          onClick={() => handleSort('region')}
          className={`px-4 py-2 rounded-full ${selectedSort === 'region' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'} focus:outline-none`}
        >
          Region
        </button>

        {/* Sort by Capital */}
        <button
          onClick={() => handleSort('capital')}
          className={`px-4 py-2 rounded-full ${selectedSort === 'capital' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'} focus:outline-none`}
        >
          Capital
        </button>
      </div>
    </div>
  );
};

export default SortOptions;
