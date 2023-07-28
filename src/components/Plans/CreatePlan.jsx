import Footer from '../Footer' 
 
const CreatePlan = () => { 
    return ( 
        <div> 
            <h1>Make a plan</h1>  
            <form> 
            <label htmlFor="category">Choose a Category: </label><br/>
            <select id="category" name="cars">
            <option value="gym">Gym</option>
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="n/a">N/A</option>
            </select> <br/> <br/>
            <label htmlFor="name">Event Name:</label><br/> 
            <input type="text" id="name"/><br/><br />
            <label htmlFor="email">Event Time:</label><br/>
            <input type="text" id="email"/> <br/><br/>
            <label type="text" id="notes">Event Notes:</label><br/>  
            <input type="text" id="email"/> <br/><br/>
            <button>Create Plan!</button>
            </form> 
            <Footer />
        </div> 
    )
}   

export default CreatePlan 