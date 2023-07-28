import React from "react"  
import Footer from './Footer' 
import {Link} from 'react-router-dom' 
import Calendars from './Calendar'

const Schedule = () => { 
    return ( 
        <div> 
            <Calendars />
            <Footer />
        </div>
    )
} 

export default Schedule 