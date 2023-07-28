import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Category = () => {
  return (
    <div className="category-container">
      <div className="category-links">
        <Link to="/category" className="category-link">Create Category</Link>
        <Link to="/category/readcategory" className="category-link">View Category</Link> 
        <Link to="/category/updatecategory" className="category-link">Update Category</Link>
        <Link to="/category/deletecategory" className="category-link">Delete Category</Link>
      </div>
      <div className="category-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Category;
