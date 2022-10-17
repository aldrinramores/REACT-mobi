import React from 'react'

export const key = "2140d7d9ac32c43dab900f072a867170"

const requests = {
  // MOVIES
  requestUpcomingMovies:  `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTopRatedMovies:  `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestPopularMovies:  `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestPlayingNowMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,

  // TV SHOWS
 requestAiringToday: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
 requestOnAirToday: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`,
 requestPopularTv: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  APIkey :"2140d7d9ac32c43dab900f072a867170",
}

export default requests