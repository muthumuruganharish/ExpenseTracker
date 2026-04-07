import React from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'

const TransactionList = () => {
  const data = useSelector((state) => state.Transaction.TransactionArray)

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar active="transactionlist" />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="rounded-[28px] overflow-hidden shadow-2xl border border-slate-200 bg-white">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 p-8 text-white">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Transaction History</p>
                <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">All Transactions</h1>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Complete list of all your income and expense transactions for detailed tracking and analysis.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-800/70 px-5 py-4 text-center shadow-inner shadow-slate-900/10">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Total Count</p>
                <p className="mt-2 text-3xl font-semibold text-slate-100">{data.length}</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {data.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
                <p className="text-lg">No transactions yet.</p>
                <p className="mt-2">Add your first income or expense to start tracking.</p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-[24px] border border-slate-200 shadow-sm">
                <div className="hidden grid-cols-4 gap-4 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-600 sm:grid">
                  <span>Description</span>
                  <span>Amount</span>
                  <span>Type</span>
                  <span>Date</span>
                </div>
                <div className="divide-y divide-slate-200 bg-white">
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className="grid-cols-1 gap-4 px-5 py-4 sm:grid sm:grid-cols-4 sm:items-center"
                    >
                      <div>
                        <p className="text-base font-medium text-slate-900">{item.description || 'No description'}</p>
                      </div>
                      <div className="mt-3 text-lg font-semibold text-slate-900 sm:mt-0">
                        <span className={item.type?.toLowerCase() === 'expense' ? 'text-rose-600' : 'text-emerald-600'}>
                          {item.type?.toLowerCase() === 'expense' ? '-' : '+'}\u20b9{Number(item.amount || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                        </span>
                      </div>
                      <div className="mt-3 sm:mt-0">
                        <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${item.type?.toLowerCase() === 'income' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                          {item.type?.toUpperCase() || 'UNKNOWN'}
                        </span>
                      </div>
                      <div className="mt-3 text-sm text-slate-500 sm:mt-0">
                        {new Date(item.id).toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
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

export default TransactionList
