import React from "react";

const JobCard = ({ job, searchTerm }) => {
  // Function to highlight the search term in the title
  const highlightText = (text, term) => {
    if (!term.trim()) return text;

    const regex = new RegExp(
      `(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi",
    );
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3 className="job-title">{highlightText(job.title, searchTerm)}</h3>
        <span
          className={`badge ${job.type === "Internship" ? "badge-internship" : "badge-fulltime"}`}
        >
          {job.type}
        </span>
      </div>
      <div className="job-card-body">
        <p className="company-name">
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {job.company}
        </p>
        <p className="location">
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {job.location}
        </p>
      </div>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
