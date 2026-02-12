import React from "react";

const Filters = ({
  searchTerm,
  setSearchTerm,
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
  sortAlphabetically,
  setSortAlphabetically,
}) => {
  return (
    <div className="filters-container">
      {/* Search Input */}
      <div className="search-box">
        <svg
          className="search-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search job titles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-btn" onClick={() => setSearchTerm("")}>
            ×
          </button>
        )}
      </div>

      {/* Filter Controls */}
      <div className="filter-controls">
        {/* Location Filter */}
        <div className="filter-group">
          <label className="filter-label">Location</label>
          <div className="button-group">
            {["All", "Remote", "On-site"].map((location) => (
              <button
                key={location}
                className={`filter-btn ${locationFilter === location ? "active" : ""}`}
                onClick={() => setLocationFilter(location)}
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        {/* Job Type Filter */}
        <div className="filter-group">
          <label className="filter-label">Job Type</label>
          <div className="button-group">
            {["All", "Internship", "Full-time"].map((type) => (
              <button
                key={type}
                className={`filter-btn ${typeFilter === type ? "active" : ""}`}
                onClick={() => setTypeFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Toggle (Bonus Feature) */}
        <div className="filter-group">
          <label className="filter-label">Sort</label>
          <button
            className={`sort-btn ${sortAlphabetically ? "active" : ""}`}
            onClick={() => setSortAlphabetically(!sortAlphabetically)}
          >
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18M3 12h12M3 18h6" />
            </svg>
            A-Z
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
