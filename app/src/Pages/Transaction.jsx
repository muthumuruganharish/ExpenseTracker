import React, { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { addTransaction } from "../Features/FetchData";

const Transaction = () => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [description, setDescription] = useState("");
  const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionData = {

      id:Date.now(),

      amount,
      type,
      description,
    };

    dispatch(addTransaction(transactionData))

    console.log("Transaction:", transactionData);

    // reset form
    setAmount("");
    setType("income");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="rounded-[28px] overflow-hidden shadow-2xl border border-slate-200 bg-white">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 p-8 text-white">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Add New Transaction</p>
                <h2 className="mt-2 text-3xl font-semibold">Record your transaction</h2>
                <p className="mt-3 text-slate-300">Track your income and expenses for better financial management.</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Amount */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Amount (₹)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border-2 border-slate-200 rounded-[16px] px-5 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition"
                  placeholder="Enter amount"
                  required
                />
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Transaction Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full border-2 border-slate-200 rounded-[16px] px-5 py-3 text-slate-900 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition appearance-none cursor-pointer"
                >
                  <option value="income" className="text-slate-900">Income</option>
                  <option value="expense" className="text-slate-900">Expense</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border-2 border-slate-200 rounded-[16px] px-5 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition resize-none"
                  placeholder="Enter description (e.g., Salary, Groceries)"
                  rows="4"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3 px-6 rounded-[16px] font-semibold uppercase tracking-[0.1em] hover:shadow-lg hover:from-slate-800 hover:to-slate-700 transition duration-300 border border-slate-700"
              >
                Add Transaction
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;