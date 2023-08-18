import { useNavigate, useParams } from "react-router-dom";
import { useMovieContext } from "./MovieContext";
import { useState } from "react";

export default function BookTicket() {
  const navigate = useNavigate();
  const { movies, setMovies } = useMovieContext();
  const [quantity, setQuantity] = useState();
  const [amount, setAmount] = useState();

  console.log("Hi Everyone");
  const param = useParams();
  const movie = movies.find((m) => {
    if (m.id == param.id) {
      return m;
    }
  });

  const caluculatePrice = (e) => {
    e.preventDefault();
    let total;
    let price = movie.vote_average > 8 ? 200 : 150;
    console.log(price);
    if (quantity > 0 && price > 0) {
      total = quantity * price;
      setAmount(total);
    }

    total > 0
      ? (document.getElementById("input").innerHTML = `
 <h3>Number of Tickets : ${quantity}</h3><br></br>
 <h3>Total Amount to be paid : ${total}</h3></br>
 <button id="btn">Pay Now</button>`)
      : (document.getElementById("input").innerHTML = `
 Something Went Wrong ! Please Retry`);
    document.getElementById("btn").addEventListener("click", () => {
      display();
    });
  };
  const handleClick = () => {
    console.log("Home");
    navigate(`/`);
  };
  const display = () => {
    document.getElementById("input").innerHTML = `
    <h3>${quantity} tickets booked for ${movie.original_name}. Enjoy the movie !</h3>`;
  };
  return (
    <>
      <div className="home">
        <button onClick={handleClick} className="btn">
          Home
        </button>
      </div>
      <div className="movie-display">
        <h3 style={{ color: "white" }}>{movie.original_name}</h3>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.original_name}
          width="500px"
          height="500px"
          style={{ marginTop: "20px" }}
        />
      </div>
      <div className="input" id="input">
        <form
          onSubmit={(e) => {
            caluculatePrice(e);
          }}
        >
          <input
            type="number"
            value={quantity}
            placeholder="No of tickets"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            style={{ width: "500px", padding: "10px", margin: "10px" }}
          />
          <br></br>
          <button type="submit" className="btn">
            Book Tickets
          </button>
        </form>
      </div>
    </>
  );
}
