'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Event } from '../types/event'

const EventDetails = ({ event }: { event: Event }) => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if(!event?.location?.lat || !event?.location?.long) {
        setWeather({});  
        return false;
      }
      const response = await axios.get(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${event.location.lat}&lon=${event.location.long}`);
      setWeather(response.data);
    };

    fetchWeather();
  }, [event]);

  return (
    <div>
      <h2 className="text-2xl font-bold">{event.title}</h2>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.description}</p>
      {weather && (
        <div>
          <h3 className="text-xl font-semibold">Weather</h3>
          <p>Temperature: {weather?.properties?.timeseries[0].data.instant.details.air_temperature}°C</p>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
