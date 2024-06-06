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
    await axios.post('/api/events', { title, date, description, long, lat });
    setTitle('');
    setDate('');
    setDescription('');
    setLat('');
    setLong('');
    onEventCreated();
  };

  return (
    <div className='container mb-3.5'>
      <h2 className="text-2xl font-bold  mb-2.5">New event</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Latitude</label>
        <input
          type="number"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Longitude</label>
        <input
          type="number"
          value={long}
          onChange={(e) => setLong(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
          required
        ></textarea>
      </div>
      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 transition">
        Create Event
      </button>
    </form>
    </div>
  );
};

export default EventForm;
