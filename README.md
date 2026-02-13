🛠️ Phase 1: Core Setup (MERN Netflix-Lite)
Step 1: Project Initialization
Frontend (React/Next.js)

Create a React app (create-react-app or Next.js for SSR).

Set up routing (React Router or Next.js pages).

Install UI libraries (Material-UI, Tailwind, or Chakra UI).

Backend (Node.js + Express)

Initialize with npm init.

Install Express, Mongoose, dotenv, cors.

Create a basic server with /api routes.

Database (MongoDB)

Use MongoDB Atlas for cloud hosting.

Define schemas: User, Movie, Watchlist.

Step 2: Authentication
Implement JWT-based login/signup.

Password hashing with bcrypt.

Optional: OAuth login (Google/GitHub).

Frontend: Auth context + protected routes.

Step 3: Movie Data Integration
Use TMDB API to fetch movie metadata (title, poster, genre, rating).

Backend: Create routes like /api/movies/popular, /api/movies/search.

Frontend: Display movie cards with search and filter options.

Step 4: Watchlist Feature
Backend: /api/watchlist routes (add/remove movies).

Frontend: User can save movies to their personal list.

Store watchlist in MongoDB linked to user ID.

Step 5: Basic UI
Home page: Popular movies.

Search page: Query movies.

Watchlist page: User’s saved movies.

Navbar with login/logout.
