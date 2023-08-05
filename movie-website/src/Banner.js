
import { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Requests'

function Banner(){
   const [movie, setMovie]= useState([])

   useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(requests.fetchActionMovies)
        setMovie(request.data.results[5])

        
        
    }
    fetchData()

   },[])
console.log(movie);
  

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + "..." : string
    }


    return <header className="banner"style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg")`
        
    }}>
        <div className='banner_content'>
            <h1 className='banner_title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>{truncate(`Descriptive description`,150)}</h1>
            <div className='banner--fadeBottom'/>
            

        </div>
    </header>
}
export default Banner