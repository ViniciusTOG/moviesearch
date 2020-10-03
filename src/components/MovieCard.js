import React from "react";
import { Typography } from "@material-ui/core";

function Card({ movie }) {
  return (
    <div className="card">
      <div className="card--image">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
      </div>
      <div className="card--content">
        <Typography variant="h5">{movie.title}</Typography>

        <Typography variant="subtitle1">
          RELEASE DATE: {movie.release_date}
        </Typography>
        <Typography variant="subtitle1">
          RATING: {movie.vote_average}
        </Typography>
        <Typography variant="body1">{movie.overview}</Typography>
      </div>
    </div>
  );
}

export default Card;
