import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import requests, { key } from './Requests'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from './Footer'


const Searched = () => {
const {query} = useParams()

const baseMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${requests.APIkey}&query=${query}`
const baseTVUrl = `https://api.themoviedb.org/3/search/tv?api_key=${requests.APIkey}&query=${query}`

const [movie, setMovie] = useState([])
const [tv, setTv] = useState([])
useEffect(()=> {
    axios.get(baseMovieUrl).then((res) => {
        setMovie(res.data.results)
    })
 },[movie])

 useEffect(()=> {
    axios.get(baseTVUrl).then((res) => {
        setTv(res.data.results)
    })
 },[tv])




  return (
    <div>
        <Navbar/>
        <p className='text-white font-mono text-xs md:text-2xl p-5'>Search Results for "{query}"</p>
        <div className="p-5">
            <h1 className='text-white text-sm md:text-3xl p-5 font-mono'>Movies</h1>
            <div className="movies grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center gap-5  justify-center items-center">
                {movie.map((item) => (
                   <Link to={`/movie-details/${item.id}`}>
                    <div className='questrial_fnt pb-20' key={item.id}>
                        <img src={item.backdrop_path ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}` : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"} className=" object-cover  rounded-lg whitespace-nowrap" alt={item?.title}  />
                        <p className='text-white '>{item?.title}</p>
                    </div>
                   </Link>
                       
                    
                ))}
            </div>
        </div>

        <div className="p-5">
            <h1 className='text-white text-sm md:text-3xl p-5 font-mono'>Tv Shows</h1>
            <div className="movies grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center gap-5  justify-center items-center">
                {tv.map((item) => (
                    <Link to={`/tvshows-details/${item.id}`}>
                     <div className='questrial_fnt pb-20  whitespace-nowrap' key={item?.id}>
                            <img src={item.backdrop_path  ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}` : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"} className=" object-cover rounded-lg " alt={item?.name}  />
                            <p className='text-white '>{item?.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
       
     
        <Footer/>
    </div>
  )
}

export default Searched