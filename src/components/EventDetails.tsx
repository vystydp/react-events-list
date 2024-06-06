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
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
      <p className="text-gray-500 mb-4">{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetails;
