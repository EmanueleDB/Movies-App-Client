import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/movies";

function MovieUrl (id) {
    return `${apiEndPoint}/${id}`
}

export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovie(movieId) {
  http.delete(MovieUrl(movieId));
}

export function getMovie(movieId) {
  return http.get(MovieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(MovieUrl(movie._id), body);
  }
  return http.post(apiEndPoint, movie);
}
