# GameVault

A modern, responsive web application for discovering and exploring video games. GameVault provides an intuitive interface to browse, search, and filter games from a comprehensive database, making it easy for gamers to find their next favorite title.

## Project Overview

GameVault is a single-page application that connects to the RAWG.io API to provide users with access to an extensive database of video games. The application solves the problem of game discovery by offering powerful filtering, sorting, and search capabilities in a clean, user-friendly interface.

**What it does:**
- Displays a curated collection of video games with detailed information
- Enables users to search, filter, and sort games based on various criteria
- Provides detailed game pages with descriptions, screenshots, trailers, and metadata

**The main problem it solves:**
- Simplifies game discovery by aggregating game data in one place
- Offers efficient browsing with infinite scroll and advanced filtering
- Provides quick access to game information, ratings, and media

**Who it is for:**
- Gamers looking to discover new titles
- Developers showcasing modern React development practices
- Anyone interested in exploring video game data

## Features

- **Game Browsing**: Infinite scroll grid layout displaying games with cover images, platform icons, and critic scores
- **Advanced Search**: Real-time search functionality to find games by name
- **Genre Filtering**: Filter games by genre (Action, RPG, Strategy, etc.)
- **Platform Filtering**: Filter games by platform (PC, PlayStation, Xbox, Nintendo, etc.)
- **Sorting Options**: Sort games by relevance, release date, popularity, rating, and more
- **Game Details**: Comprehensive game detail pages featuring:
  - Full game descriptions with expandable text
  - Game attributes (genres, publishers, platforms, Metacritic scores)
  - Screenshot galleries
  - Embedded game trailers
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Performance Optimized**: 
  - Image optimization with automatic cropping
  - Lazy loading for images
  - Query caching with 24-hour stale time
  - Infinite scroll for efficient data loading

## Tech Stack

### Frontend Technologies
- **React 19.2.0** - Modern UI library with latest features
- **TypeScript 5.9.3** - Type-safe JavaScript for better developer experience
- **React Router DOM 7.12.0** - Client-side routing and navigation

### Styling/UI Libraries
- **Chakra UI 3.31.0** - Comprehensive component library with built-in theming
- **Emotion 11.14.0** - CSS-in-JS styling solution (used by Chakra UI)
- **React Icons 5.5.0** - Icon library for UI elements
- **next-themes 0.4.6** - Theme management for dark/light mode switching

### State Management & Data Fetching
- **Zustand 5.0.10** - Lightweight state management for query parameters
- **TanStack Query (React Query) 5.90.19** - Powerful data synchronization and caching library
- **Axios 1.13.2** - HTTP client for API requests

### Build Tools & Package Managers
- **Vite 7.2.4** - Next-generation frontend build tool with fast HMR
- **vite-tsconfig-paths 6.0.4** - TypeScript path alias support for Vite
- **npm** - Package manager

### Dev Tools & Linters
- **ESLint 9.39.1** - Code linting and quality assurance
- **TypeScript ESLint 8.46.4** - TypeScript-specific linting rules
- **React Query Devtools 5.91.2** - Development tools for debugging React Query

### Additional Libraries
- **react-infinite-scroll-component 6.1.1** - Infinite scroll implementation
- **ms 2.1.3** - Time conversion utility for cache configuration

## Libraries & Frameworks

### Chakra UI
A modular and accessible component library that provides pre-built components with consistent styling. Used for rapid UI development while maintaining design consistency and accessibility standards.

### TanStack Query (React Query)
Enables efficient server state management with automatic caching, background updates, and infinite query support. Handles loading states, error states, and data synchronization seamlessly, reducing boilerplate code significantly.

### Zustand
A minimal state management solution used for managing global query state (search text, selected genre, platform, and sort order). Chosen for its simplicity and performance compared to heavier alternatives.

### React Router DOM
Provides declarative routing for single-page application navigation. Enables clean URL structure and programmatic navigation between game list and detail pages.

### Axios
HTTP client library used for making API requests to RAWG.io. Provides interceptors, request/response transformation, and better error handling compared to native fetch API.

## APIs & Integrations

### RAWG.io API
**External API**: [RAWG Video Games Database API](https://rawg.io/apidocs)

- **Purpose**: Provides comprehensive video game data including game information, screenshots, trailers, genres, platforms, and ratings
- **Authentication**: API key-based authentication (stored in environment variables)
- **Endpoints Used**:
  - `/games` - Fetch paginated list of games with filtering and sorting
  - `/games/{id}` - Fetch detailed game information
  - `/games/{id}/screenshots` - Fetch game screenshots
  - `/games/{id}/movies` - Fetch game trailers

**API Key Configuration**:
- API key is required and must be set in environment variables
- See Setup & Installation section for configuration details

## Architecture & Structure

### High-Level Architecture
GameVault follows a modern React application architecture with clear separation of concerns:

```
┌─────────────────────────────────────┐
│         React Components            │
│  (Pages, UI Components, Layouts)   │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│         Custom Hooks                │
│  (useGames, useGame, useGenres, etc)│
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Service Layer (API Client)     │
│      (api-client.ts, image-url.ts)  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      External API (RAWG.io)         │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│      State Management (Zustand)     │
│      (Query state, filters)          │
└─────────────────────────────────────┘
```

### Folder Structure Overview

```
gamevault/
├── public/                 # Static assets
├── src/
│   ├── assets/           # Images and media files
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Base UI components (provider, tooltip, etc.)
│   │   └── ...          # Feature-specific components
│   ├── data/            # Static data (genres, platforms)
│   ├── entities/        # TypeScript interfaces/types
│   ├── hooks/           # Custom React hooks for data fetching
│   ├── pages/           # Page components (HomePage, GameDetailPage)
│   ├── routes.tsx       # Route configuration
│   ├── services/        # API client and utility services
│   ├── store.ts         # Zustand store configuration
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── .gitignore
├── eslint.config.js     # ESLint configuration
├── package.json
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build configuration
```

### Key Architectural Patterns

- **Component-Based Architecture**: Modular, reusable components following React best practices
- **Custom Hooks Pattern**: Data fetching logic abstracted into custom hooks for reusability
- **Service Layer**: API communication centralized in service classes
- **Type Safety**: Full TypeScript coverage with entity types for API responses
- **State Management**: Global state (Zustand) for query parameters, local state for UI
- **Code Organization**: Feature-based structure with clear separation between UI, logic, and data layers

## Setup & Installation

### Prerequisites

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)
- **RAWG.io API Key**: Free API key from [RAWG.io](https://rawg.io/apidocs)

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_RAWG_API_KEY=your_api_key_here
```

**Note**: Replace `your_api_key_here` with your actual RAWG.io API key. The `.env` file is already included in `.gitignore` to prevent committing sensitive information.

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gamevault.git
   cd gamevault
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Create .env file and add your RAWG.io API key
   echo "VITE_RAWG_API_KEY=your_api_key_here" > .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)
   - The application should now be running

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Usage

### Basic Usage

1. **Browse Games**: The home page displays a grid of games with infinite scroll. Scroll down to load more games automatically.

2. **Search Games**: 
   - Use the search bar in the navigation
   - Type a game name and press Enter
   - Results update automatically

3. **Filter by Genre**:
   - On desktop: Use the sidebar genre list
   - Click a genre to filter games

4. **Filter by Platform**:
   - Use the platform selector dropdown
   - Select a platform to show only games available on that platform

5. **Sort Games**:
   - Use the sort selector dropdown
   - Choose from options like "Relevance", "Date Added", "Name", "Release Date", "Popularity", "Average Rating"

6. **View Game Details**:
   - Click on any game card
   - View full description, screenshots, trailers, and game attributes
   - Use the expandable text feature for long descriptions

7. **Toggle Dark Mode**:
   - Click the sun/moon icon in the navigation bar
   - Switch between light and dark themes

### Example Workflows

**Finding Action Games for PC:**
1. Navigate to the home page
2. Select "Action" from the genre sidebar
3. Select "PC" from the platform dropdown
4. Browse through the filtered results

**Searching for a Specific Game:**
1. Type the game name in the search bar
2. Press Enter
3. Browse search results
4. Click on a game to view details

**Exploring New Releases:**
1. Use the sort selector
2. Choose "Release Date" (descending)
3. Browse the most recently released games

## Future Improvements

### Planned Features
- User authentication and personal game collections
- Wishlist functionality
- Game reviews and ratings from users
- Social features (sharing games, following users)
- Advanced filtering options (release date range, rating range)
- Game comparison tool
- Export game lists to CSV/JSON
- Offline mode with service workers
- Progressive Web App (PWA) support

### Technical Improvements
- Unit and integration testing with Vitest
- End-to-end testing with Playwright or Cypress
- Performance optimizations (code splitting, lazy loading routes)
- Enhanced error handling and error boundaries
- Loading state improvements (skeleton screens)
- Accessibility improvements (ARIA labels, keyboard navigation)
- Internationalization (i18n) support
- SEO optimization with React Helmet
- Analytics integration

## Screenshots / Demo

_Screenshots and demo links will be added here as they become available._

<!-- 
Example format for future screenshots:
![Home Page](screenshots/home.png)
![Game Detail Page](screenshots/game-detail.png)
![Dark Mode](screenshots/dark-mode.png)

Live Demo: [https://gamevault-demo.vercel.app](https://gamevault-demo.vercel.app)
-->

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ using React, TypeScript, and Chakra UI**
