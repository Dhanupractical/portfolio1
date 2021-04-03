import React from 'react'
import ecom from '../images/portfolio-images/ecom.png'
import portfolio2 from '../images/portfolio-images/portfolio2.png'
import portfolio1 from '../images/portfolio-images/portfolio1.png'
import bootstrap from '../images/portfolio-images/bootstrap4.png'
import form from '../images/portfolio-images/form.png'
import login from '../images/portfolio-images/login.png'
import keeper from '../images/portfolio-images/Keeper.png'
import mushroom from '../images/portfolio-images/mushroom.png'
import drum from '../images/portfolio-images/drum.png'

export default function PortFolio() {
  return (
  <div id='portfolionav' >    
    <center><h1 className="mx-auto text-warning" >My PortFolio</h1>
    </center> 
    <div className="gridcontainer" >

      <div className="d-flex flex-column">
       <img className="w-100 h-auto" src={ecom} alt="ecom"/>
       <a href="https://github.com/Dhanupractical/E-com-inbetween-upload" className="btn btn-success m-lg-4 m-sm-2">GitHub Code</a>
      </div>

      <div className="d-flex flex-column">
       <img className="w-100 h-auto" src={portfolio2} alt="portfolio2"/>
       <a href="https://github.com/Dhanupractical/Portfolio2-website" className="btn btn-success m-lg-4 m-sm-2">GitHub Code</a>
      </div>

      <div className="d-flex flex-column">
       <img className="w-100 h-auto" src={portfolio1} alt="portfolio1"/>
       <a href="https://github.com/Dhanupractical/portfolio1" className="btn btn-success m-lg-4 m-sm-2">GitHub Code</a>
      </div>

      <div className="d-flex flex-column">
       <img className="w-100 h-auto" src={bootstrap} alt="bootstrap"/>
       <a href="https://github.com/Dhanupractical/Gallery-website" className="btn btn-success m-lg-4 m-sm-2">GitHub Code</a>
      </div>

      <div className="d-flex flex-column">
       <img className="w-100 h-auto" src={form} alt="form"/>
       <a href="https://github.com/Dhanupractical/Form-verification" className="btn btn-success m-lg-4 m-sm-2">GitHub Code</a>
      </div>
      
      <div className="d-flex flex-column">
       <img className="w-100 h-auto" src={login} alt="login"/>
       <a href="https://github.com/Dhanupractical/Private-routing-project" className="btn btn-success m-lg-4 m-sm-2">GitHub Code</a>
      </div>

      <div className="d-flex flex-column">
       <img className="w-100 h-auto" src={keeper} alt="keeper"/>
       <a href="https://github.com/Dhanupractical/keepr-aap-final-project" className="btn btn-success m-lg-4 m-sm-2">GitHub Code</a>
      </div>

      <div className="d-flex flex-column">
       <img className="w-100 h-auto" src={mushroom} alt="mushroom"/>
       <a href="https://github.com/Dhanupractical/mini-project" className="btn btn-success m-lg-4 m-sm-2">GitHub Code</a>
      </div>

      <div className="d-flex flex-column">
       <img className="w-100 h-auto" src={drum} alt="drum"/>
       <a href="https://github.com/Dhanupractical/Drum-Kit" className="btn btn-success m-lg-4 m-sm-2">GitHub Code</a>
      </div>

  
    </div>
  </div>  
  )
}
