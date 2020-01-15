import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/movies";
export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovie(movieId) {
  http.delete(apiEndPoint + "/" + movieId);
}

export function getMovie(movieId) {
  return http.put(apiEndPoint + "/" + movieId);
}

export function saveMovie(movieId) {
    return http.put(apiEndPoint + "/" + movieId);
  }
  

