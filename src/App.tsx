import { Routes, Route, Outlet, Link } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<MovieList />} />
          <Route path=":imdbID" element={<MovieDetail />} />

          <Route
            path="*"
            element={
              <div>
                <h1>404: Not Found</h1>
                <p>Sorry, the page you're looking for doesn't exist.</p>
                <p>
                  <Link to="/">Go back to the home page</Link>
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
