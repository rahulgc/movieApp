import { createContext, useContext, useEffect, useState } from "react";
import { MovieContext, useMovieContext } from "./MovieContext";
import { Link, useNavigate } from "react-router-dom";
export default function Movie() {
  let listMovies;
  const navigate = useNavigate();
  const [list, setList] = useState();
  const { movies, setMovies } = useMovieContext();

  const handleClick = (id) => {
    console.log("Inside");
    navigate(`/movieDesc/${id}`);
  };
  const getMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/discover/tv?api_key=346617707239808b4211ea2a1564417b&with_networks=213";
    const options = {
      method: "GET",
    };

    try {
      await fetch(url, options)
        .then((r) => {
          return r.json();
        })
        .then((r) => {
          setMovies(r.results);
          listMovies = r.results.map((r) => (
            <div className="movie">
              <h3 style={{ color: "white" }}>{r.original_name}</h3>
              <a
                onClick={() => {
                  handleClick(r.id);
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${r.poster_path}`}
                  alt={r.original_name}
                  width="150px"
                  className="movie-img"
                />
              </a>
              <br></br>
            </div>
          ));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
    return listMovies;
  };
  useEffect(() => {
    const main = async () => {
      setList(await getMovies());
    };
    main();
  }, []);

  return (
    <>
      <h1 className="header">Book My Show</h1>
      <div className="Container">{list}</div>
    </>
  );
}
