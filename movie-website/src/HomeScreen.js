import './HomeScreen.css'
import NavBar from './NavBar'
import Banner from './Banner'
import requests from './Requests'

function HomeScreen(){
    return <div className="homeScreen">
        {/* NavBar */}
        <NavBar/>
        {/* Banner */}
        <Banner/>

        {/* Rows */}
        <Rows title='NETFLIX ORIGINALS' 
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
              />
        <Rows title='Trending' fetchUrl={requests.fetchTrending}/>            
        <Rows title='Action' fetchUrl={requests.fetchActionMovies}/>      
        <Rows title='Comedy' fetchUrl={requests.fetchComedyMovies}/>      
        <Rows title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>      
        <Rows title='Horror' fetchUrl={requests.fetchHorrorMovies}/>      
        <Rows title='Romance' fetchUrl={requests.fetchRomanceMovies}/>      

    </div>

}
export default HomeScreen