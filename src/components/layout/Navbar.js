import React from 'react';
import './Navbar.css';
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className="topnav">
         
  <NavLink className="active" exact to={"/home"}>Home</NavLink>
  <NavLink className='logout' to={'/'}>logout</NavLink>
  <Link className='button1' to={"/users/add"}>Add User</Link>
</div>

    </div>
  )
}
export default Navbar;
