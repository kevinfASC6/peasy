import Paper from '../assets/paper.png' 
import Footer from './Footer'

const Home = () => { 
    return ( 
        <div className='home'>   
            <div className='color'>
            <img src={Paper} id='paper-img'/>
            <ul>
                <li className="home-list">Keep track of what you have done and when!</li>  
                <li className="home-list">Stay organized with the help of tags, categories & reminders.</li> 
                <li className="home-list">Never miss an important task again! </li>  
                <li className="home-list">Easy, Peasy! Login to begin!</li> 
            </ul>  
            </div>
            <Footer/>
        </div>
    ) 
} 

export default Home 