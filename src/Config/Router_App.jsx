import { createBrowserRouter,
createRoutesFromElements,RouterProvider,Route } from "react-router-dom";
import {Home} from '../Pages/Home'
import {Login} from '../Pages/Login'
import {Singup} from '../Pages/Singup'
import { Layout } from "../Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { set_user_auth } from "../../Store/Slice/user_Slice_auth";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

import Procurer from "../Pages/Procurer";
import { Donor } from "../Pages/Donor";


const router  =  createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>} >
            <Route path="" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Singup/>} />
            <Route path="/donor" element={<Donor/>} />
            <Route path="/procurer" element={<Procurer/>} />


        </Route> 
    )
)

const  Router_App = () => {
    const dispatch = useDispatch();
    const user_auth_state = useSelector((state) => state.user_auth);
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          dispatch(set_user_auth({ data: {}, auth: true }));
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(set_user_auth({ data: {}, auth: false }));
        }
      });
    }, []);
  
    return (
      <>
        {user_auth_state.auth_check_loading ? (
          <div className="h-[100dvh] grid place-items-center">
            <CircularProgress />
          </div>
        ) : (
          <RouterProvider router={router} />
        )}
      </>
    );
}
export {Router_App}