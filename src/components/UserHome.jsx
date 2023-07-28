import React from 'react'   
import {Link} from 'react-router-dom' 
import Footer from './Footer'

const UserHome = () => { 
    return (  
        <div>
            <div className='grid-container'> 
                    <div className='box'> 
                        <Link to="/plan">Plans</Link>
                    </div> 
                    <div className='box'>
                        <Link to="/category">Categories</Link>
                    </div>
                    <div className='box'>  
                        <Link to="/schedule">Schedule</Link>
                    </div> 
                    <div className='box'>
                        <Link to="/settings">Settings</Link>
                    </div>
            </div>   
            <Footer/>
        </div>
    )
} 

export default UserHome