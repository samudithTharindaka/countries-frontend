import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook

const Card = ({ country }) => {
  const navigate = useNavigate();  // Initialize useNavigate

  // Function to handle card click
  const handleCardClick = () => {
    navigate(`/country/${country.code}`);  // Navigate to the details page with the country's alpha-3 code (cca3)
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-white p-4 sm:p-6 w-full sm:w-64 md:w-80 lg:w-96 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
      onClick={handleCardClick}  // Add onClick handler to make the card clickable
    >
      {/* Flag Image */}
      <img
        src={country.flag} // Fixed the src attribute
        alt={country.name.common}
        className="w-full h-28 sm:h-48 md:h-60 rounded-sm object-cover"
      />
      <div className="mt-4 text-center">
        {/* Country Name */}
        <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-orbitron">{country.name.common}</h3>

        {/* Country Info */}
        <p className="text-sm sm:text-base text-gray-600 mt-2">Population: {country.population.toLocaleString()}</p>
        <p className="text-sm sm:text-base text-gray-600">Region: {country.region}</p>
        <p className="text-sm sm:text-base text-gray-600">Subregion: {country.code}</p>
        <p className="text-sm sm:text-base text-gray-600">Capital: {country.capital || 'N/A'}</p>

        {/* Optional: Currency */}
        {country.currencies && country.currencies[Object.keys(country.currencies)[0]] ? (
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Currency: {country.currencies[Object.keys(country.currencies)[0]].name}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
