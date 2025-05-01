import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";

function DetailPage() {
  let { movieId } = useParams();
  const [movies, setMovies] = useState({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`
      );
      setMovies(request.data);
    }
    fetchData();
  }, [movieId]);

  console.log(movies);
  if (!movies) return <div>...loading</div>;
  return (
    <section className="detail">
      <img
        src={`https://image.tmdb.org/t/p/original/${
          movies.backdrop_path || movies.poster_path
        }`}
        alt="modal__poster-img"
        className="detail__image"
      />
      <div className="detail__name">{movies.name || movies.title}</div>
      <div className="detail__overview">{movies.overview}</div>
    </section>
  );
}

export default DetailPage;
