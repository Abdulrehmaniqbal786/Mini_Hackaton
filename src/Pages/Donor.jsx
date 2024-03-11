import React, { useEffect, useState } from 'react'
import { read_user_data, write_user_data } from '../Config/Firebase/firebase_methods';
import { getDatabase, ref, child, get } from "firebase/database";
import { database, firebase_app } from '../Config/Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { set_user_auth } from '../../Store/Slice/user_Slice_auth';

const Donor = () => {
    
  const [data, setData] = useState({});
//  const navigate = useNavigate() 
 const user_auth_state = useSelector((state) => state.user_auth.user_data)

 const myJSON = JSON.stringify(user_auth_state);
const dispatch = useDispatch()
 
 
 const change_handle = (e) => {
    const { id, value } = e.target;

    setData((p) => {
      return { ...p, [id]: value };
    });
  };
  console.log(data)
  
  
  const submit_handle = (e) => {
    e.preventDefault();
    // read_user_data(user_auth_state,data)
    // read_user_data(data.name, data.bloodGroup,data.country,data.city)
  
      write_user_data(`${myJSON}/donor`, data).then((res) => {
        dispatch(set_user_auth({ data1:data }));
        localStorage.setItem("Donor",true)
      }).catch((error) => {
      console.log(error);
    });
    
    // console.log(user_auth_state.user_data)
   

  
  };

  const itemms = localStorage.getItem("Donor")
  return (
    <div>
    {itemms?<>
      <div className="card w-96 bg-base-100 shadow-xl">

  <div className="card-body">
    <h2 className="card-title">Blood Donation information</h2>
    <p>Name:{data.name}</p>
    <p>Blood Group:{data.bloodGroup}</p>
    <p>Country:{data.country}</p>
    <p>City:{data.city}</p>

  </div>
</div></>:
    
    
      <div>
          <div>
        <div className='flex justify-center items-center '>

          <div className="border-4 rounded border-black w-6/12 relative flex flex-col p-4 rounded-md text-black bg-white">

            <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]"><h1 className='text-2xl font-bold'>Blood Donation</h1></div>
            <form onSubmit={submit_handle} className="flex flex-col gap-3">
              <div className="block relative">
                <label for="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Name</label>
                <input onChange={change_handle} required={true} type="text" id="name" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

                <label for="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Blood Group</label>
                <input onChange={change_handle} required={true} type="text" id="bloodGroup" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />



                <label for="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Country</label>
                <input required={true} onChange={change_handle} type="text" id="country" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

              </div>
              <div className="block relative">
                <label for="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">City</label>
                <input required={true} onChange={change_handle} type="text" id="city" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

              </div>

              <button type="submit" className="bg-blue-700 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>

            </form>
            </div>

        </div>
        
      </div>
      </div>}
     </div>
  )
}

export  {Donor}