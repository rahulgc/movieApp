import "./App.css";
import BookTicket from "./BookTicket";
import Movie from "./Movie";
import { MovieProvider } from "./MovieContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDesc from "./MovieDesc";

export default function App() {
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Movie />} />
            <Route path="/moviedesc/:id" element={<MovieDesc />} />
            <Route path="/bookTicket/:id" element={<BookTicket />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  );
}
