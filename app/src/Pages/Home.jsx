import React from 'react'
import Transaction from './Transaction'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar active="home"/>
      <Transaction/>
    </div>
  )
}

export default Home
