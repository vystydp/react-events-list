'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Event } from '../types/event'

const EventDetails = ({ event }: { event: Event }) => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if(!event?.location?.lat) {
        return false;
      }
      const response = await axios.get(`${process.env.NEXT_PUBLIC_WEATHER_API_URL}?lat=${event.location.lat}&lon=${event.location.long}`);
      setWeather(response.data);
    };

    fetchWeather();
  }, [event]);

  return (
    <div className='container'>
      <h2 className="text-2xl font-bold mb-3.5">{event.title}</h2>
      <div className={'box-border h-42 w-42 p-4 border-1 shadow-lg' + (new Date(event.date).getTime() < new Date().getTime() ? ' previous' : ' upcomming')}
               key={event.id} >
                  <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.description}</p>
      {weather && (
        <div>
          <h3 className="text-xl font-semibold">Weather</h3>
          <p>Temperature: {weather?.properties?.timeseries[0].data.instant.details.air_temperature}°C</p>
        </div>
      )}
          </div>
    </div>
  );
};

export default EventDetails;
