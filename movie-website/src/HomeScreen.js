import './HomeScreen.css'
import NavBar from './NavBar'
import Banner from './Banner'
import requests from './Requests'
import Row from './Row'

function HomeScreen(){
    return <div className="homeScreen">
        {/* NavBar */}
        <NavBar/>
        {/* Banner */}
        <Banner/>

        {/* Rows */}
        <Row title='NETFLIX ORIGINALS' 
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
              />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>            
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>            
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>      
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>      
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>      
        <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>      
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>      

    </div>

}
export default HomeScreen