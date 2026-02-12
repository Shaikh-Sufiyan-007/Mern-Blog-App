import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'

const Layout = () => {
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        localStorage.removeItem('token')
    }
  return (
    <>
        <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
            <h1 onClick={() => navigate('/')} className='flex items-center gap-2 text-2xl font-semibold cursor-pointer'>Blog App</h1>
            <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
        </div>

        <div className='flex h-[calc(100vh-70px)]'>
            <Sidebar />
            <Outlet />
        </div>
    </>
  )
}

export default Layout