# Job Board Interface

A modern, responsive job board application built with React and Vite. This application allows users to search, filter, and browse job listings efficiently.

## Live Demo

🔗 **[View Live Application](https://regal-gingersnap-1d3c91.netlify.app/)**

## Features

- **Display Job Cards** - Shows job title, company, location, and type (Internship/Full-time)
- **Location Filter** - Filter jobs by Remote or On-site
- **Job Type Filter** - Toggle between Internship and Full-time roles
- **Real-time Search** - Search job titles with instant results
- **Responsive Design** - Mobile-friendly layout that adapts to all screen sizes
- **Bonus Features**:
  - Alphabetical sorting (A-Z)
  - Search keyword highlighting in job titles

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** CSS3 with CSS Variables
- **Icons:** SVG icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/abhijithwinddaa/Cygnus-Voyages-assignemnt.git
cd Cygnus-Voyages-assignemnt
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── JobCard.jsx     # Individual job card component
│   └── Filters.jsx     # Search and filter controls
├── data/               # Mock data
│   └── jobs.js         # Job listings data
├── App.jsx             # Main application component
├── App.css             # Application styles
└── main.jsx            # Entry point
```

## Deployment

This project can be deployed to:

- [Vercel](https://vercel.com) - Recommended for React apps
- [Netlify](https://netlify.com) - Easy deployment with drag & drop

## Assumptions

- Job data is static (mock data) - no backend/API integration required
- Location filter options are limited to "Remote" and "On-site"
- Job type filter options are "Internship" and "Full-time"
- Search is case-insensitive and matches job titles only

## Improvements with More Time

- **Backend Integration** - Connect to a real API for dynamic job listings
- **Pagination** - Add pagination or infinite scroll for large datasets
- **Advanced Filters** - Add salary range, experience level, and date posted filters
- **Save/Bookmark Jobs** - Allow users to save jobs for later (with localStorage)
- **Job Details Page** - Add a detailed view for each job with full description
- **Dark Mode** - Implement theme toggle for better accessibility
- **Unit Tests** - Add Jest/React Testing Library tests for components
- **TypeScript** - Add type safety for better code maintainability

## Author

Built as part of Cygnus Assignment

## License

MIT
