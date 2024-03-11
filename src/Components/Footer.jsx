import React from 'react'

const Footer = () => {
  return (
    <div><footer className="footer p-10 bg-neutral text-neutral-content">
    <nav>
      <h6 className="footer-title">Services</h6> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Company</h6> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Legal</h6> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  <footer className="footer p-10  bg-slate-400  text-neutral-content">
  <nav>
      <h4 className='ml-[450px] text-[20px]'>© 2021 Copyright:Blood_Bank.com</h4>
    </nav>
  </footer>
  </div>
  )
}

export  {Footer}