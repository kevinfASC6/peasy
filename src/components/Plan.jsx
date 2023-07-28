import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Plan = () => { 
    return ( 
      <div className="category-container">
          <div className="category-links">
            <Link to="/plan" className="category-link">Create Plan</Link>
            <Link to="/plan/updateplan" className="category-link">Update Plan</Link>
            <Link to="/plan/deleteplan" className="category-link">Delete Plan</Link>
          </div>
          <div className="category-content">
            <Outlet />
          </div>
      </div>
    )
} 

export default Plan  

