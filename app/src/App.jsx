import React from 'react'
import Transaction from './Pages/Transaction'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Balance from "./Pages/Balance"
import TransactionList from './Pages/TransactionList'

const App = () => {
  return (
    <Router>

      <Routes>

            <Route path="/" element={<Home/>} />

            <Route path="/balance" element={<Balance/>}/>
            
            <Route path='/transactionlist' element={<TransactionList/>}/>
            



      </Routes>





    </Router>
  )
}

export default App
