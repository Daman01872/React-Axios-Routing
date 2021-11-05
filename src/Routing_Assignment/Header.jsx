import React from 'react'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#"> <Link to="/"  class="phase text-light">Home</Link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">  <Link to="/mount" class="phase text-light"> Mounting Phase </Link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">  <Link to="/update"  class="phase text-light"> Updating Phase</Link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">  <Link to="/unmount"  class="phase text-light"> Unmounting Phase </Link> </a>
        </li>
        
    
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Header
