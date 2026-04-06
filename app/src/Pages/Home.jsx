import React from 'react'
import Transaction from './Transaction'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>


        <div>

            <div>
                <Navbar active="home"/>
            </div>


            <div>
                <Transaction/>
            </div>

        </div>
        


      
    </div>
  )
}

export default Home
