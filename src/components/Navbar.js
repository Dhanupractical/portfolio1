import React from 'react'
import logo from '../images/logo.png'
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
    <div className="container">
    <a className="navbar-brand" href="#homenav"><img className="logo"   src={logo} alt="logo"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#homenav">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contactmenav">Mail Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#mylifenav">My Life</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolionav">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#reactsocialnav">Share Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contactforgrid">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}
