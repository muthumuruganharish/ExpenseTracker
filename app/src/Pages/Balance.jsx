import React from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'

const Balance = () => {
  const data = useSelector((state) => state.Transaction.TransactionArray)

  const income = data
    .filter((item) => item.type?.toLowerCase() === 'income')
    .reduce((sum, item) => sum + Number(item.amount || 0), 0)

  const expense = data
    .filter((item) => item.type?.toLowerCase() === 'expense')
    .reduce((sum, item) => sum + Number(item.amount || 0), 0)

  const balance = income - expense

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar active="balance" />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="rounded-[28px] overflow-hidden shadow-2xl border border-slate-200 bg-white">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 p-8 text-white">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Balance Dashboard</p>
                <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Your money at a glance</h1>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Review your current balance, income and expense summary for better financial control.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-800/70 px-5 py-4 text-center shadow-inner shadow-slate-900/10">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Available</p>
                <p className="mt-2 text-3xl font-semibold text-emerald-400">₹{balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Total Income</p>
                <p className="mt-4 text-2xl font-semibold text-emerald-300">₹{income.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Total Expense</p>
                <p className="mt-4 text-2xl font-semibold text-rose-300">₹{expense.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Transactions</p>
                <p className="mt-4 text-2xl font-semibold text-slate-100">{data.length}</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Recent Transactions</h2>
                <p className="mt-1 text-sm text-slate-500">Quick view of the latest activity in your account.</p>
              </div>
            </div>

            {data.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
                No transactions yet. Add your first income or expense to start tracking.
              </div>
            ) : (
              <div className="overflow-hidden rounded-[24px] border border-slate-200 shadow-sm">
                <div className="hidden grid-cols-3 gap-4 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-600 sm:grid">
                  <span>Description</span>
                  <span>Amount</span>
                  <span>Type</span>
                </div>
                <div className="divide-y divide-slate-200 bg-white">
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className="grid-cols-1 gap-4 px-5 py-4 sm:grid sm:items-center"
                    >
                      <div>
                        <p className="text-base font-medium text-slate-900">{item.description || 'No description'}</p>
                        <p className="mt-1 text-sm text-slate-500 sm:hidden">{item.type?.toUpperCase()}</p>
                      </div>
                      <div className="mt-3 flex items-center gap-2 sm:mt-0">
                        <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${item.type?.toLowerCase() === 'income' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                          {item.type?.toUpperCase() || 'UNKNOWN'}
                        </span>
                      </div>
                      <div className="mt-3 text-right text-lg font-semibold text-slate-900 sm:mt-0">
                        {item.type?.toLowerCase() === 'expense' ? '-' : '+'}₹{Number(item.amount || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Balance
