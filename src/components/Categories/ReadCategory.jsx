import Footer from '../Footer'

const ReadCategory = () => { 
    return ( 
        <div> 
            <h1>Read</h1> 
            <form> 
                <label htmlFor="title">Title:</label><br />
                <input type="text" id="title"/><br /><br/>
            </form> 
            <Footer />
        </div>  
    )
} 

export default ReadCategory 