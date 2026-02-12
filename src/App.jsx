import React, { useState, useMemo } from "react";
import jobs from "./data/jobs";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";
import "./App.css";

function App() {
  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  // Filter and sort jobs based on user criteria
  const displayedJobs = useMemo(() => {
    let filtered = jobs.filter((job) => {
      // Search filter - match job title
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Location filter
      const matchesLocation =
        locationFilter === "All" || job.location === locationFilter;

      // Type filter
      const matchesType = typeFilter === "All" || job.type === typeFilter;

      return matchesSearch && matchesLocation && matchesType;
    });

    // Sort alphabetically if enabled (Bonus feature)
    if (sortAlphabetically) {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [searchTerm, locationFilter, typeFilter, sortAlphabetically]);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">
            <span className="logo-icon">💼</span>
            JobBoard
          </h1>
          <p className="tagline">Find your dream opportunity</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Filters Section */}
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          sortAlphabetically={sortAlphabetically}
          setSortAlphabetically={setSortAlphabetically}
        />

        {/* Results Count */}
        <div className="results-info">
          <p>
            Showing <strong>{displayedJobs.length}</strong> of{" "}
            <strong>{jobs.length}</strong> jobs
            {searchTerm && (
              <span>
                {" "}
                matching "<em>{searchTerm}</em>"
              </span>
            )}
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="jobs-grid">
          {displayedJobs.length > 0 ? (
            displayedJobs.map((job) => (
              <JobCard key={job.id} job={job} searchTerm={searchTerm} />
            ))
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No jobs found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 JobBoard. Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
