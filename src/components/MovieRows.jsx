import React from 'react'
import Navbar from  './Navbar'
import Movies from './Movies'
import requests from './Requests'
import Footer from './Footer'




const MovieRows = () => {

  return (
    <>
    <Navbar/>
    <Movies rowId = "1" category="UPCOMING MOVIES" fetchUrl={requests.requestUpcomingMovies}/> 
    <Movies rowId = "2" category="TOP RATED" fetchUrl={requests.requestTopRatedMovies}/>
    <Movies rowId = "3" category="POPULAR" fetchUrl={requests.requestPopularMovies}/>
    <Movies rowId = "4" category="PLAYING NOW" fetchUrl={requests.requestPlayingNowMovies}/>
    <Footer/>
    </>
  )
}

export default MovieRows 