import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Geocode from 'react-geocode';

function Location() {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Set your Geocode API key as an object
        Geocode.setApiKey('process.b2eec2d080ff43ae956711a72e5f506a');

        Geocode.fromLatLng(latitude, longitude).then(
          (response) => {
            const cityName = response.results[0].components.city;
            setCity(cityName);
          },
          (error) => {
            setError('Error fetching location information.');
          }
        );
      });
    } else {
      setError('Geolocation is not available on this device.');
    }
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>Your current city is: {city || 'Loading...'}</p>
      )}
    </div>
  );
}

export default Location;
