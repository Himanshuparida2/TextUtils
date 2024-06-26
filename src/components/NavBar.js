import React from 'react'
import PropTypes from 'prop-types'
export default function NavBar(props) {
  return (
    <>  
    <h1 className='heading'>{props.title}</h1>
    <div className='container'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="www.google.com">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
        <a className="nav-link" href="www.google.com">Features</a>
      </div>
    </div>
  </div>
</nav>
    </div>
    <div className="box"></div>
    </>
  )
}
NavBar.propTypes={title : PropTypes.string}