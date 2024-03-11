import React from 'react'
import { useNavigate } from 'react-router-dom'
import donate from '../Components/images/donate.jpg'

const Card01 = () => {
    const navigate = useNavigate()
    const click_handle = ()=>{
        navigate("/donor")
    }
  return (
    <div className='flex  justify-center w-2/4'><div className="card card-side bg-base-100 shadow-xl">
    <figure><img width={50} src={donate}  alt="Movie"/></figure>
    <div className="card-body">
      <h2 className="card-title">Donate</h2>
      <p>Donating blood can make a life-changing difference for those in need, and I believe in the power of our community to come together and make a difference.</p>
        <button onClick={click_handle} className="btn btn-info">Donate Now</button>
    </div>
  </div></div>
  )
}

export  {Card01}