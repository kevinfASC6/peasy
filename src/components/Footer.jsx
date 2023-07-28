import React from 'react'  
import {Link} from 'react-router-dom'


const Footer = () => { 
    return ( 
        <div className="footer"> 
            <Link to="/contactform">Contact Me!</Link> <br />
            <a href="">LinkedIn</a>
        </div>
    )
} 

export default Footer