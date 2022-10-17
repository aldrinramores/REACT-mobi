import React from 'react'
import Navbar from './Navbar'
import TvShows from './TvShows'
import requests from './Requests'
import Footer from './Footer'

const TvShowsRows = () => {
  return (
    <>
    <Navbar/>
    <TvShows rowId = "1" category="AIRING TODAY" fetchUrl={requests.requestAiringToday}/> 
    <TvShows rowId = "2" category="ON AIR" fetchUrl={requests.requestOnAirToday}/>
    <TvShows rowId = "3" category="POPULAR" fetchUrl={requests.requestPopularTv}/>
    <Footer/>
    </>
  )
}

export default TvShowsRows