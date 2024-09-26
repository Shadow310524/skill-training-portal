import React, { useState } from 'react';
import '../Css/AdminDashboard.css';

const AllocateVenues = () => {
  const [venues, setVenues] = useState([
    { name: 'Room 101', capacity: '30' },
    { name: 'Lab 202', capacity: '20' },
  ]);

  const [newVenue, setNewVenue] = useState({ name: '', capacity: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVenue({ ...newVenue, [name]: value });
  };

  const handleAddVenue = () => {
    setVenues([...venues, newVenue]);
    setNewVenue({ name: '', capacity: '' });
  };

  const handleRemoveVenue = (index) => {
    const updatedVenues = venues.filter((_, i) => i !== index);
    setVenues(updatedVenues);
  };

  return (
    <div className="dashboard-container">
      <h2>Allocate Venues</h2>
      <div className="venue-form">
        <input
          type="text"
          name="name"
          placeholder="Venue Name"
          value={newVenue.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="capacity"
          placeholder="Capacity"
          value={newVenue.capacity}
          onChange={handleInputChange}
          required
        />
        <button onClick={handleAddVenue}>Add Venue</button>
      </div>

      <div className="venue-list">
        <h3>Venue List</h3>
        <ul>
          {venues.map((venue, index) => (
            <li key={index}>
              {venue.name} - Capacity: {venue.capacity}
              <button onClick={() => handleRemoveVenue(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllocateVenues;
