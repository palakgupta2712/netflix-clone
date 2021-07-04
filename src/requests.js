const API_KEY = "13977bfbef3d0feea45dc763979aae8a";
export const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrendingAll: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=en-US`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&language=en-US`,
  fetchChildrenSeries: `/discover/tv?api_key=${API_KEY}&with_networks=35`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_networks=16`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchMystery: `/discover/tv?api_key=${API_KEY}&with_networks=18`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchFamilyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
};
export default requests;
