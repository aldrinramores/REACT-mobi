import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import requests from './Requests.jsx'
import axios from 'axios'
import {RiStarFill} from 'react-icons/ri'

const TvShowsDetails = () => {
  const {id} = useParams()
  const baseMovieDetails = `https://api.themoviedb.org/3/tv/${id}?api_key=${requests.APIkey}&language=en-US`
  const [tv, setTv] = useState([])
  const [tvGenre, setTvGenre] = useState([])

    // CALLING 
    useEffect(() => {
        axios.get(baseMovieDetails).then((response) => {
            setTv(response.data)
            setTvGenre(response.data.genres)
        })
      },[])
      console.log(tv)

    // SHOW SPECIFIC GENRE
    let storedGenre = []
    tvGenre.forEach((item)=> {
    storedGenre.push(item.name)
    })
    let showGenre = storedGenre.join(" / ")
    // TRUNCATE STRING
    
    

    const truncate = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + `... `   ;
          } else {
            return str;
        }
    }
  return (
    <>
         <div className='main-wrapper relative'>
          
          <img className='absolute top-0 object-cover w-[100vw] h-[100vh] z-10' src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path || tv.poster_path}`} />
          <div className='overlay absolute bg-black/80 top-0 w-[100vw] h-[100vh] z-20'></div>
        
          {/* DETAILS */}
          <div className="absolute flex  left-0 right-0 h-screen z-40 p-10 max-w-5xl mx-auto questrial_fnt">
            <div className="m-auto flex flex-col md:flex-row justify-between items-center gap-5">
              <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path || tv.backdrop_path }`}  className="w-[50%] md:w-[40%] rounded-lg" />
              <div className="text-white">
                <p className='text-xl md:text-4xl text-center md:text-left questrial_fnt'>{tv.name}</p>
                <p className='text-sm md:text-2xl text-center md:text-left text-gray-400'>{showGenre}</p>
                  <div className="flex justify-center md:justify-start items-center gap-5 whitespace-nowrap text-xs md:text-sm text-center md:text-left">
                    <div className="flex gap-2 items-center py-2 ">
                      <p className='text-yellow-500'><RiStarFill/></p>
                      <p>{tv.vote_average ? tv.vote_average : "?"}</p>
                    </div>
                    <p>Status: {tv.status}</p>
                  </div>
                <div className="flex items-center  gap-2  justify-center md:justify-start">
                <p className=' text-xs md:text-sm  '>Seasons: {tv.number_of_seasons}</p>
                <p className=' text-xs md:text-sm  '>Episodes: {tv.number_of_episodes}</p>
                </div>
               
                <p className='text-justify md:text-left text-xs md:text-sm  py-5'>{truncate(tv?.overview, 501)} <a href={tv.homepage} className="text-sky-500">Read More</a> </p>
                <div className="relative bg-black h-[100%] w-[100%] -z-10"></div>
                
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default TvShowsDetails