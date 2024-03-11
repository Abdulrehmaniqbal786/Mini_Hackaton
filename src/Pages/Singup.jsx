import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {
  create_account,
  write_user_data,
} from "../Config/Firebase/firebase_methods";
import { useNavigate } from 'react-router-dom';
import { set_user_auth } from '../../Store/Slice/user_Slice_auth';

const Singup = () => {

  const [data, setData] = useState({});
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const change_handle = (e) => {
    const { id, value } = e.target;

    setData((p) => {
      return { ...p, [id]: value };
    });
  };

  const submit_handle = (e) => {
    e.preventDefault();
    // const { email, password } = data;

    create_account(data.email, data.password)
      .then((res) => {
        const user_id = res.user.uid;
        write_user_data(user_id, data).then((res) => {
          dispatch(set_user_auth({ data:user_id, auth: true }));
          navigate("/login")
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className='flex justify-center items-center '>

        <div className="border-4 rounded border-black w-6/12 relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Sign_Up</div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">SignUp  to your account</div>
          <form onSubmit={submit_handle} className="flex flex-col gap-3">
            <div className="block relative">
              <label for="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Name</label>
              <input type="text" id="name" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
              <label for="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">UserName</label>
              <input type="text" id="username" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
              <label for="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
              <input onChange={change_handle} type="text" id="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

            </div>
            <div className="block relative">
              <label for="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
              <input onChange={change_handle} type="text" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

            </div>

            <button type="submit" className="bg-blue-700 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>

          </form>
          <div className="text-sm text-center mt-[1.6rem]">Do you have an account yet? <a className="text-sm text-blue-500" href="/login">Login</a></div>
        </div>

      </div>
    </div>
  )
}

export { Singup }