import React from 'react'
import { SiBloglovin } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { useAppContext } from '../../context/AppContext';

const Navbar = () => {
  const {navigate, token} = useAppContext()
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
        <h1 onClick={() => navigate('/')} className='flex items-center gap-2 text-2xl font-semibold cursor-pointer'>Blog App</h1>
        <button onClick={() => navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>{token ? 'Dashboard' : 'Login'}<FaArrowRight />
        </button>
    </div>
  )
}

export default Navbar