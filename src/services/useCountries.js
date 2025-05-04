import { useState, useEffect } from 'react';

const API_URL = 'https://restcountries.com/v3.1/all';

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data); // Log the raw data for debugging

        // Map the data into the format we need
        const formattedData = data.map((country) => ({
          name: country.name.common,
          capital: country.capital ? country.capital[0] : 'N/A',
          population: country.population || 'N/A',
          region: country.region || 'N/A',
          flag: country.flags.png,
          code: country.ccn3,
        }));

        setCountries(formattedData);
      } catch (error) {
        setError(error);
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};
