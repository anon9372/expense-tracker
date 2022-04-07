import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"

function IncomeExpenses() {

  const {transactions} = useContext(GlobalContext)

  // Mapping all the amounts from transactions
  const amounts = transactions.map(transaction => transaction.amount)

  // calculating the income i.e positive numbers using filter and reduce
  const income = amounts.filter(item => item > 0)
                        .reduce((acc,item) => (acc += item),0).toFixed(2)

    console.log(income)

  // calculating the expenses i.e negative numbers using filter and reduce
  const expense = (amounts.filter(item => item < 0 )
                         .reduce((acc, item) => (acc -= item),0)).toFixed(2)

  return (
            
            <div className='inc-exp-container'>
                <div>
                    <h4>Income</h4>
                    <p id='money-plus' className='money plus'>+{income}</p>
                </div>

                <div>
                    <h4>Expense</h4>
                    <p id='money-minus' className='money minus'>-{expense}</p>
                </div>


            </div>
  )
}

export default IncomeExpenses
