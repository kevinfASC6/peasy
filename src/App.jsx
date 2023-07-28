import './App.css'   
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header' 
import Home from './components/Home' 
import Login from './components/Login' 
import Register from './components/Register' 
import UserHome from './components/UserHome' 
import Plan from './components/Plan' 
import Category from './components/Category'; 
import Schedule from './components/Schedule'; 
import Settings from './components/Settings' 
import CreateCategory from './components/Categories/CreateCategory' 
import ReadCategory from './components/Categories/ReadCategory' 
import DeleteCategory from './components/Categories/DeleteCategory' 
import UpdateCategory from './components/Categories/UpdateCategory' 
import CreatePlan from './components/Plans/CreatePlan'  
import DeletePlan from './components/Plans/DeletePlan' 
import UpdatePlan from './components/Plans/UpdatePlan' 
import Calendars from './components/Calendar' 
import ContactForm from './components/ContactForm'


function App() {

  return ( 
    <BrowserRouter>
      <div>  
        <Routes> 
          <Route path='/' element = {<Header/> }>  
            <Route index element={<Home />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path='/register' element={<Register />} /> 
            <Route path='/user' element={<UserHome />} /> 
            <Route path='/plan' element={<Plan />} >  
              <Route index element ={<CreatePlan />} /> 
              <Route path='deleteplan' element ={<DeletePlan/>} /> 
              <Route path='updateplan' element = {<UpdatePlan />} />
            </Route>
            <Route path="/category" element={<Category />}>
              <Route index element={<CreateCategory />} />
              <Route path="readcategory"  element={<ReadCategory />} />
              <Route path="deletecategory" element={<DeleteCategory />} />
              <Route path="updatecategory" element={<UpdateCategory />} />
            </Route>  
            <Route path='/calendar' element={<Calendars />} />
            <Route path='/schedule' element={<Schedule />} /> 
            <Route path='/settings' element={<Settings />} />  
            <Route path='/contactform' element={<ContactForm />} />
          </Route>
        </Routes>
      </div> 
    </BrowserRouter>
  )
}

export default App