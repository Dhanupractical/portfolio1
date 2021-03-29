import React from 'react'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default function Contact() {
  return (
    <div className='contactgrid' id='contactforgrid' >
    <div className="d-flex align-items-center flex-column">
    <LocalPhoneIcon style={{fontSize:"150px", color:'skyblue'}} />
    <p style={{fontSize:"20px", color:'skyblue', textAlign:'center'}} >9980709652</p>
    </div>
    <div className="d-flex align-items-center flex-column">
    <ContactMailIcon style={{fontSize:"150px", color:'skyblue', selfAlign:'center'}} />
    <p style={{fontSize:"20px", color:'skyblue', textAlign:'center'}} >DHANUSHREDDYKRD <br/> @GMAIL.COM</p>
    </div>
    </div>
  )
}

