import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // 계속 반복되는 부분
  params: {
    api_key: import.meta.env.VITE_MOVIE_DB_API_KEY,
    Language: "ko-KR",
  },
});

export default instance;
