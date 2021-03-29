import React from 'react'
import { FacebookButton, TwitterButton } from "react-social";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function ReactSocial() {
    const url = "https://github.com/Dhanupractical"
  return (
    <div id='reactsocialnav'  className='m-3 d-flex justify-content-center align-items-center' >

      <p className='text-success pr-3 font-weight-bold' >Share My <br/> Git repository</p>
      
      <FacebookButton url={url} appId={"789393771675028"}
      style={{color:'green', fontSize:30, background:'transparent'}} 
      >
        <FacebookIcon style={{color:'orange', fontSize:'80' }} />
      </FacebookButton>


      <TwitterButton url={url} appId={"N11RrRKyIzBBnm6TC9Qv1Goo1"}
      style={{color:'green', fontSize:30, background:'transparent'}} 
      >
      <TwitterIcon style={{color:'orange', fontSize:'80' }} />
      </TwitterButton>

    </div>
  )
}
