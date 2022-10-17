import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import requests from './Requests.jsx'
import axios from 'axios'
import {RiStarFill} from 'react-icons/ri'

const MovieDetails = () => {
  const {id} = useParams()
  const baseMovieDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${requests.APIkey}&language=en-US`
  const [movie, setMovie] = useState([])
  const [movieGenre, setMovieGenre] = useState([])

 
  // CALLING 
  useEffect(() => {
    axios.get(baseMovieDetails).then((response) => {
        setMovie(response.data)
        setMovieGenre(response.data.genres)
    })
  },[])

// SHOW SPECIFIC GENRE
 let storedGenre = []
 movieGenre.forEach((item)=> {
  storedGenre.push(item.name)
 })
 let showGenre = storedGenre.join(" / ")

 console.log(movie)
//  TRUNCATE
 const truncate = (str, num) => {
  if (str?.length > num) {
      return str.slice(0, num) + `...`   ;
    } else {
      return str;
  }
}

  return (
    <>

        <div className='main-wrapper relative'>
          
          <img className='absolute top-0 object-cover w-[100vw] h-[100vh] z-10' src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHxBFlQz39ZapLmrBVvcr0zo9zmAIgB8E3H8S77CX&s"} />
          <div className='overlay absolute bg-black/80 top-0 w-[100vw] h-[100vh] z-20'></div>
        
          {/* DETAILS */}
          <div class="absolute flex  left-0 right-0 h-screen z-40 p-10 max-w-5xl mx-auto questrial_fnt">
            <div class="m-auto flex flex-col md:flex-row justify-between items-center gap-5">
              <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHxBFlQz39ZapLmrBVvcr0zo9zmAIgB8E3H8S77CX&s"}  className="w-[40%] md:w-[40%] rounded-lg" />
              <div className="text-white">
                <p className='text-xl md:text-4xl text-center md:text-left questrial_fnt'>{movie.title}</p>
                <p className='text-sm md:text-2xl text-center md:text-left text-gray-400'>{showGenre}</p>
                  <div className="flex justify-center md:justify-start items-center gap-5 whitespace-nowrap text-xs md:text-sm text-center md:text-left">
                    <div className="flex gap-2 items-center py-2 ">
                      <p className='text-yellow-500'><RiStarFill/></p>
                      <p>{movie.vote_average}</p>
                    </div>
                    <p>Status: {movie.status}</p>
                  </div>
     
                <p className='text-justify  md:text-left text-xs md:text-sm  py-5'>{truncate(movie.overview,500)} <a href={movie.homepage} className="text-sky-500"> Read More</a></p>
                
              </div>
              
            </div>
            
          </div>

      
          
        </div>
        
    </>
  )
}

export default MovieDetails