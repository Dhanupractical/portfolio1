import React from 'react'

export default function ContactForm() {
  return (
      <>
    <form id='contactmenav' action="mailto:dhanushreddykrd@gmail.com" method="post" encType="text/plain"
    className="main-form-container position-relative mb-5 col-lg-8 col-md-8 col-sm-11 mx-auto d-flex flex-wrap justify-content-around">
      <div className="left-part col-lg-4 col-md-8 col-sm-10 m-lg-2 m-md-2 m-sm-5 d-flex flex-column justify-content-around">
         <input name="My Name" type="text" placeholder="Enter the Name" className="w-100 m-2 backg" />
         <input name="My Phone No." type="number" placeholder="Enter your Contact Number" className="w-100 m-2 backg" />
         <input name="My Email ID" type="email" placeholder="Enter your Email" className="w-100 m-2 backg" />
         <input name="subject" type="text" placeholder="Subject" className="w-100  m-2 backg" />
      </div>
      <div className="right-part col-lg-6 col-md-8 col-sm-10 d-flex flex-column justify-content-lg-around ">
         <textarea className="textarea-contact backg" placeholder="please describe your project...." name="message" rows="10" cols="30"  >
         </textarea>
         <button className=" btn btn-warning" >Mail Me</button>
      </div>
   </form>
   </>
  )
}
