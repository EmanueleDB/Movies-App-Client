import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "../common/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies]; // cloning the state
    const index = movies.indexOf(movie); // assigning to the const index the index of a movie
    movies[index] = { ...movies[index] }; // cloning the index of the movies in a new object
    movies[index].liked = !movies[index].liked; // we toggle it (if it's true it becomes false and opposite)
    this.setState({ movies }); //returning the new state
  };

  render() {
    const { length: count } = this.state.movies;
    console.log("Movies:", this.state.movies);
    if (count === 0) return <p>There are no Movies!</p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
