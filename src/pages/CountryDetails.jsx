import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // To access the route parameter
import Menu from '../components/Menu';

const CountryDetails = () => {
  const { code } = useParams();  // Get the country code from the URL
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        if (!response.ok) {
          throw new Error('Country not found');
        }
        const data = await response.json();
        setCountry(data[0]);  // Set the country data
      } catch (err) {
        setError(err.message);  // Set error if fetching fails
      } finally {
        setLoading(false);  // Set loading to false once data is fetched
      }
    };

    fetchCountryDetails();
  }, [code]);  // Refetch when the country code changes

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  // Destructure country properties for easy access
  const {
    name,
    flags,
    capital,
    region,
    subregion,
    population,
    currencies,
    languages,
    demonyms,
    borders,
    area,
    timezones,
    latlng,
    coatOfArms,
    maps
  } = country;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-10">
        <Menu /> {/* Include the Menu component */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
        {/* Country Header */}
        <div className="flex flex-col sm:flex-row items-center mb-8">
          <img src={flags.png} alt={name.common} className="w-32 h-32 sm:w-48 sm:h-32 rounded-lg shadow-lg" />
          <div className="sm:ml-8 mt-4 sm:mt-0">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">{name.common}</h1>
            <p className="text-lg text-gray-600">{name.official}</p>
          </div>
        </div>

        {/* Country Info */}
        <div className="space-y-4">
          {/* Capital */}
          <div className="flex justify-between">
            <strong className="text-gray-700">Capital:</strong>
            <span className="text-gray-600">{capital ? capital[0] : 'N/A'}</span>
          </div>

          {/* Region and Subregion */}
          <div className="flex justify-between">
            <strong className="text-gray-700">Region:</strong>
            <span className="text-gray-600">{region}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-gray-700">Subregion:</strong>
            <span className="text-gray-600">{subregion}</span>
          </div>

          {/* Population */}
          <div className="flex justify-between">
            <strong className="text-gray-700">Population:</strong>
            <span className="text-gray-600">{population.toLocaleString()}</span>
          </div>

          {/* Currency */}
          <div className="flex justify-between">
            <strong className="text-gray-700">Currency:</strong>
            <span className="text-gray-600">
              {currencies && currencies[Object.keys(currencies)[0]] ? currencies[Object.keys(currencies)[0]].name : 'N/A'}
            </span>
          </div>

          {/* Languages */}
          <div className="flex justify-between">
            <strong className="text-gray-700">Languages:</strong>
            <span className="text-gray-600">{languages ? Object.values(languages).join(', ') : 'N/A'}</span>
          </div>

          {/* Demonyms */}
          <div className="flex justify-between">
            <strong className="text-gray-700">Demonyms:</strong>
            <span className="text-gray-600">
              {demonyms ? `${demonyms.eng.m} / ${demonyms.eng.f}` : 'N/A'}
            </span>
          </div>

          {/* Area */}
          <div className="flex justify-between">
            <strong className="text-gray-700">Area:</strong>
            <span className="text-gray-600">{area ? `${area} km²` : 'N/A'}</span>
          </div>

          {/* Timezones */}
          <div className="flex justify-between">
            <strong className="text-gray-700">Timezones:</strong>
            <span className="text-gray-600">{timezones ? timezones.join(', ') : 'N/A'}</span>
          </div>

          {/* Coordinates */}
          <div className="flex justify-between">
            <strong className="text-gray-700">Coordinates:</strong>
            <span className="text-gray-600">{latlng ? `${latlng[0]}, ${latlng[1]}` : 'N/A'}</span>
          </div>

          {/* Borders */}
          <div className="flex justify-between">
            <strong className="text-gray-700">Borders:</strong>
            <span className="text-gray-600">{borders ? borders.join(', ') : 'None'}</span>
          </div>

          {/* Coat of Arms */}
          {coatOfArms && coatOfArms.svg && (
            <div className="mt-4 flex justify-between items-center">
              <strong className="text-gray-700">Coat of Arms:</strong>
              <img src={coatOfArms.svg} alt="Coat of Arms" className="w-24 h-24" />
            </div>
          )}

          {/* Maps */}
          <div className="mt-4">
            <strong className="text-gray-700">Maps:</strong>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                <a href={maps.googleMaps} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Google Maps</a>
              </li>
              <li>
                <a href={maps.openStreetMaps} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">OpenStreetMap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
