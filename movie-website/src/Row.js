import './Row.css'
import { useEffect, useState } from 'react'
import axios from './axios'

function Row({title, fetchUrl, isLargeRow=false}){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])
   
    return <div className="row">
            <h2>{title}</h2>
            <div className='row_posters'> 
            {movies.map((movie)=>{
              return  <img 
                   key={movie.id}
                   className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                   src={`https://image.tmdb.org/t/p/original/${
                    isLargeRow? movie.poster_path: movie.backdrop_path
                }`} alt={movie.title}/>
            })}
            </div>
           
       
    </div>

}

export default Row