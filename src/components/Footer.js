import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='h-25 p-5 w-100 d-flex justify-content-center bg-success' >
      <p>© {year} Copyright Mushroom Council All Rights Reserved.</p>
    </div>
  )
}
