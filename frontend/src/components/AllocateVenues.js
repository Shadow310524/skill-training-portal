import React, { useEffect, useState } from 'react';

const AllocateVenues = () => {
  const [venues, setVenues] = useState([]);
  const [newVenue, setNewVenue] = useState({ name: '', capacity: '' });

  useEffect(() => {
    fetch("http://localhost:8080/api/venues")
      .then((res) => res.json())
      .then((data) => setVenues(data))
      .catch((error) => console.error("Error fetching venues:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVenue({ ...newVenue, [name]: value });
  };

  const handleAddVenue = () => {
    fetch("http://localhost:8080/api/venues", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVenue),
    })
      .then((res) => res.json())
      .then((data) => setVenues([...venues, data]))
      .catch((error) => console.error("Error adding venue:", error));

    setNewVenue({ name: '', capacity: '' });
  };

  const handleRemoveVenue = (id) => {
    fetch(`http://localhost:8080/api/venues/${id}`, { method: "DELETE" })
      .then(() => setVenues(venues.filter((venue) => venue.id !== id)))
      .catch((error) => console.error("Error deleting venue:", error));
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
          type="number"
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
          {venues.map((venue) => (
            <li key={venue.id}>
              {venue.name} - Capacity: {venue.capacity}
              <button onClick={() => handleRemoveVenue(venue.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllocateVenues;
