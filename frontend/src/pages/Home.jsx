import React from 'react'
import Navbar from '../components/Navbar'
import Head from '../components/Head'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Head />
        <BlogList />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home