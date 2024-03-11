import React from 'react'
import { Outlet } from 'react-router-dom'

const privite_routes = () => {

    const islogdin = localStorage.getItem(islo) 
  return islogdin?(<Outlet/>):na

  
}

export default privite_routes