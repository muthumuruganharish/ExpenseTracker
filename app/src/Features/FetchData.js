import { createSlice } from "@reduxjs/toolkit";
import Transaction from "../Pages/Transaction";

const fetchData=createSlice({
    name :"transactionFunction",
    initialState:{
        TransactionArray:[]
    },

    reducers:{
        addTransaction:(state,action)=>{
            state.TransactionArray.push(action.payload)
        }
    }


})

export const {addTransaction}=fetchData.actions
export default fetchData.reducer