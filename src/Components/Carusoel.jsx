import React from 'react'
import col1 from '../Components/images/col1.jpg'
import col2 from '../Components/images/col2.jpg'
import col3 from '../Components/images/col3.jpg'
import col4 from '../Components/images/col4.jpg'

const Carusoel = () => {
  return (

<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={col1} className="w-full h-80 " />
    <div className="object-cover	 absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={col2} className="w-full h-80 " />
    <div className="object-cover	 absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={col3} className="w-full h-80 " />
    <div className="object-cover	absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={col4} className="w-full h-80  " />
    <div className="object-cover	absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export  {Carusoel}