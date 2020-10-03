import React, { useContext } from "react";
import { Context } from "./context/Context";
import MovieCard from "./components/MovieCard";
import { Grid, Paper } from "@material-ui/core";
import Header from "./components/Header";

function App() {
  const { movies } = useContext(Context);

  const movieElements = movies
    .filter((movie) => movie.poster_path)
    .map((movie) => {
      return (
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} key={movie.id}>
          <Paper elevation={3}>
            <MovieCard movie={movie} />
          </Paper>
        </Grid>
      );
    });

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          {movieElements}
        </Grid>
      </div>
    </div>
  );
}

export default App;
