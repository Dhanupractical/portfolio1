import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
   <div id='homenav' className="header-wrapper">
   <div className="main-info">
       <h1>Web Development</h1>
       <Typed
           className="typed-text"
           strings={["Dynamic Learner","Web Developer","Fresher"]}
           typeSpeed={40}
           backSpeed={60}
           loop
       />
       <a href="#contactforgrid" className="btn-main-offer">Contact Me</a>
   </div>
   </div>
  )
}

export default Header
