import React from 'react'
import './Nav.css';
const Navbar = () => {
  return (<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="">
      <img src="image.png" className="logo"/>POKEMONS
    </a>
  
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button type="button" class="btn btn-primary">Submit</button>
      </form>
    </div>
  
</nav>
</>
  )
}

export default Navbar
