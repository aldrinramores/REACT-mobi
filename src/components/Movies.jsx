import React from 'react'
import { useState, useEffect } from "react"
import { AiOutlineSwapRight, AiOutlineSwapLeft} from 'react-icons/ai'
import { Link } from "react-router-dom"
import axios from "axios"





const Movies = ({category, fetchUrl, rowId}) => {
 const [movies, setMovies] = useState([])

useEffect(()=> {
   axios.get(fetchUrl).then((res) => {
       setMovies(res.data.results)
   })
},[fetchUrl])




const scrollLeft = () => {
 var slideL = document.getElementById('slider' + rowId)
 slideL.scrollLeft += -500
}
const scrollRight = () => {
 var slideL = document.getElementById('slider' + rowId)
 slideL.scrollLeft += 500
}



    return (
    <div className="main_wrapper relative pb-2 p-3 ">
      <h1 className="mx-2 md:mx-5 my-5 text-sm md:text-xl font-mono text-white font-bold">{category}</h1>
        <div className="relative  flex items-center group ">
            <button  className="absolute left-2 text-slate-300 p-2 bg-slate-900 rounded-full opacity-70 hover:opacity-100 hidden sm:group-hover:block md:group-hover:block z-40 " onClick={scrollLeft}><AiOutlineSwapLeft size={40}/></button>
            <div id = {`slider` + rowId} className="slider  overflow-x-scroll whitespace-nowrap scroll-smooth scroll-container no-scrollbar rounded-lg" >
                    {movies.map((movie) => (
                    <Link to={`/movie-details/${movie.id}`}>
                        <div className="inline-block mx-1 md:mx-5  hover:scale-105 transition-all relative" key={movie.id}>
                        <img src = {`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} className=" block image-scroll-align rounded-lg  "/>
                        <p className="absolute top-0 pt-10 hover:pt-0 left-0 flex opacity-0 hover:opacity-95 transition-all justify-center items-center h-full w-full text-center text-sm md:text-md  text-white questrial_fnt font-bold bg-black/70 cursor-pointer">{movie.title}</p>
                        </div>
                    </Link>
                    
                    ))}
            </div>  
            <button  className="absolute right-2 text-slate-300 p-2 bg-slate-900 rounded-full opacity-70 hover:opacity-100 hidden sm:group-hover:block md:group-hover:block z-40 " onClick={scrollRight}><AiOutlineSwapRight size={40}/></button>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#09203F]  opacity-70 h-full w-[400px] hidden lg:block z-30"></div>
        </div> 
    </div>
  )
}

export default Movies