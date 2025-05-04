import React, { useState } from 'react';
import Menu from './Menu';
import SortOptions from './SortOption';
import Card from './Card';
import { useCountries } from '../services/useCountries';  // Import the custom hook

const Home = () => {
  const { countries, loading, error } = useCountries();  // Use the custom hook
  const [searchQuery, setSearchQuery] = useState('');  // State to hold the search query
  const [searchType, setSearchType] = useState('name');  // State to hold the selected search type (name, region, capital)
  const [sortBy, setSortBy] = useState('name');  // State to store the selected sort option

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle sorting change
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption); // Update the sort option based on user selection
  };

  // Handle search type change (by name, region, or capital)
  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
    setSearchQuery('');  // Reset search query when search type changes
  };

  // Filter countries based on search type and query
  const filteredCountries = countries.filter((country) => {
    if (searchType === 'name') {
      return country.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (searchType === 'region') {
      return country.region.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (searchType === 'capital') {
      return country.capital && country.capital[0].toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });

  // Sort countries based on the selected option (name, population, region, or capital)
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);  // Sort alphabetically by name
    }
    if (sortBy === 'population') {
      return a.population - b.population;  // Sort by population (ascending)
    }
    if (sortBy === 'region') {
      return a.region.localeCompare(b.region);  // Sort alphabetically by region
    }
    if (sortBy === 'capital') {
      return a.capital.localeCompare(b.capital);  // Sort alphabetically by capital
    }
    return 0; // Default return if no sort option matches
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading countries: {error.message}</div>;
  }

  return (
    <div className="bg-gray-100 pt-28 h-auto px-4 sm:px-[5%]">
      <Menu />
      <SortOptions onSortChange={handleSortChange} />

      {/* Search Bar with Dropdown and Input */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center bg-gray-200 rounded-lg w-full sm:w-auto max-w-md">
          {/* Search Type Dropdown */}
          <select
            value={searchType}
            onChange={handleSearchTypeChange}
            className="p-2 pl-4 pr-2 bg-white rounded-l-lg border-2 border-gray-300 focus:outline-none "
          >
            <option value="name">Name</option>
            <option value="region">Region</option>
            <option value="capital">Capital</option>
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder={`Search by ${searchType.charAt(0).toUpperCase() + searchType.slice(1)}...`}
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 w-full rounded-r-lg bg-gray-200 focus:outline-none "
          />

          {/* Search Icon */}
          <button className="p-2 bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-r-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M18 10a8 8 0 10-8 8 8 8 0 008-8z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Grid layout for displaying filtered and sorted countries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {sortedCountries.length > 0 ? (
          sortedCountries.map((country) => (
            <Card key={country.name} country={country} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No countries found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
