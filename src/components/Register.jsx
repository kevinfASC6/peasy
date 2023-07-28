import React, { useState } from 'react'; 
import {Link} from 'react-router-dom' 
import Footer from './Footer'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter an email address"/>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Create a strong password"/>
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Have a Account? Log in here</Link> 
      <Footer />
    </div>
  );
};

export default Register

