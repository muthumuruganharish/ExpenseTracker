import {configureStore} from "@reduxjs/toolkit"
import FetchData from "../Features/FetchData"
// import Transaction from "../Pages/Transaction"

 const store= configureStore({
    reducer:{
        Transaction:FetchData //transaction name is refered from  FetchData
    }
})

export default store;