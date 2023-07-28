import Footer from '../Footer'
const CreateCategory = () => { 
    return(
        <div> 
            <h1>Create</h1> 
            <form> 
                <label htmlFor="name">Category Name:</label> <br/>
                <input type="text" id="name"/><br/><br/> 
                <label htmlFor="name">Category Emojis:</label> <br/>
                <input type="text" id="name"/><br/><br/> 
                <label htmlFor="name">Category Notes:</label> <br/>
                <input type="text" id="name"/><br/><br/>
                <button>Save Category</button>
            </form> 
            <Footer />
        </div>
    )
} 

export default CreateCategory 