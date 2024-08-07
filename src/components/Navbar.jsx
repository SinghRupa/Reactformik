import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link  class="navbar-brand" to={'/'} style={{fontSize:"25px"}}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"30px", fontSize:"20px", fontFamily:"revert"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active" to={'/home'} style={{padding:"10px"}}>Home</Link>
        </li>  
        <li className="nav-item">
          <Link  className="nav-link active" to={'/product'}style={{padding:"10px", marginLeft:"20px"}}>Product</Link>
        </li>
      </ul> 
    </div>
  </div>
</nav>
    )
}

export default Navbar;
