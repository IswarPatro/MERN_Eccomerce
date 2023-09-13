import React from 'react'
import Header from '../components/Layout/Header'
import { Outlet } from 'react-router-dom'

const Mainpage = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Mainpage