import React from 'react'
import Nav from './Nav.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout(){
  return(
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}