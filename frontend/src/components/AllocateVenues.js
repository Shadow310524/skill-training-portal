import React, { useEffect, useState } from "react";

const AllocateVenues = () => {
  const [venues, setVenues] = useState([]);
  const [newVenue, setNewVenue] = useState({ name: "", capacity: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch venues from API
  useEffect(() => {
    fetch("http://localhost:8080/api/venues")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging Line
        setVenues(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching venues:", error);
        setError("Failed to fetch venues");
        setLoading(false);
      });
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVenue({ ...newVenue, [name]: value });
  };

  // Add new venue
  const handleAddVenue = () => {
    if (!newVenue.name || !newVenue.capacity) {
      alert("Please enter both Venue Name and Capacity.");
      return;
    }

    fetch("http://localhost:8080/api/venues", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVenue),
    })
      .then((res) => res.json())
      .then((data) => setVenues((prev) => [...prev, data]))
      .catch((error) => console.error("Error adding venue:", error));

    setNewVenue({ name: "", capacity: "" });
  };

  // Remove venue
  const handleRemoveVenue = (id) => {
    fetch(`http://localhost:8080/api/venues/${id}`, { method: "DELETE" })
      .then(() => setVenues((prev) => prev.filter((venue) => venue.id !== id)))
      .catch((error) => console.error("Error deleting venue:", error));
  };

  return (
    <div className="dashboard-container">
      <h2>Allocate Venues</h2>

      {/* Display loading or error messages */}
      {loading ? <p>Loading venues...</p> : error ? <p>{error}</p> : null}

      {/* Venue Form */}
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

      {/* Venue List */}
      <div className="venue-list">
        <h3>Venue List</h3>
        {venues.length > 0 ? (
          <ul>
            {venues.map((venue) => (
              <li key={venue.id}>
                {venue.name} - Capacity: {venue.capacity}
                <button onClick={() => handleRemoveVenue(venue.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No venues available</p>
        )}
      </div>
    </div>
  );
};

export default AllocateVenues;
