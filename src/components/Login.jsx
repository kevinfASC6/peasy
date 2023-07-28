import React, { useState } from 'react'; 
import {Link} from 'react-router-dom' 
import Footer from './Footer'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter an email address"/>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your Password"/>
        <button type="submit">Login</button>
      </form>
      <Link to='/register'>New User? Register Here</Link> 
      <Footer />
    </div>
  );
};

export default Login;
