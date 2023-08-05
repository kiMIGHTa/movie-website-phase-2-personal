
import './Banner.css'

function Banner(){
    return <header className="banner"style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg")`
        
    }}>
        <div className='banner_content'>
            <h1 className='banner_title'>
                <div className='banner_buttons'>
                <button className='bannner_button'>Play</button>
                <button className='bannner_button'>My List</button>
                </div>
            </h1>

        </div>
    </header>
}
export default Banner