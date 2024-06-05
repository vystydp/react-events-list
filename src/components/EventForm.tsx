'use client';

import { useState } from 'react';
import axios from 'axios';

const EventForm = ({ onEventCreated }: { onEventCreated: () => void }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [long, setLong] = useState('');
  const [lat, setLat] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events`, { title, date, description, long, lat });
    setTitle('');
    setDate('');
    setDescription('');
    setLat('');
    setLong('');
    onEventCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="lat" className="block text-sm font-medium">Latitude</label>
        <input
          id="lat"
          type="number"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="long" className="block text-sm font-medium">Longitude</label>
        <input
          id="long"
          type="number"
          value={long}
          onChange={(e) => setLong(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="desc"className="block text-sm font-medium">Description</label>
        <textarea
          id="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        ></textarea>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
