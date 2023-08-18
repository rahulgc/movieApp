import { useNavigate, useParams } from "react-router-dom";
import { useMovieContext } from "./MovieContext";

export default function MovieDesc() {
  const { movies, setMovies } = useMovieContext();
  const param = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => {
    if (m.id == param.id) {
      return m;
    }
  });
  const handleClick = () => {
    console.log("Home");
    navigate(`/`);
  };
  const route = (id) => {
    console.log("Inside");
    navigate(`/bookTicket/${id}`);
  };
  return (
    <>
      <div className="nav">
        <h1 style={{ color: "violet" }}>Book My Show</h1>
        <a onClick={handleClick} style={{ color: "white", fontSize: "1.2rem" }}>
          Home
        </a>
      </div>
      <div className="movie-container">
        <div className="movie-desc">
          <h2 style={{ color: "white" }}>{movie.original_name}</h2>
          <br></br>
          <p
            style={{
              color: "white",
              float: "left",
              margin: "20px",
              borderInline: "",
            }}
          >
            {movie.overview}
          </p>
          <h4 style={{ color: "red", margin: "10px", background: "black" }}>
            IMDB Rating : <span>{movie.vote_average}</span>{" "}
          </h4>
        </div>
        <div className="movie-image">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.original_name}
            width="500px"
            height="300px"
          />
        </div>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => {
            route(movie.id);
          }}
        >
          Book Ticket
        </button>
      </div>
    </>
  );
}
