import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  // Using the reduce function to sum up all elements in the 'amounts' array. 
  // The reduce function takes a callback function and an initial value (0 in this case). 
  // The callback function adds each item in the array to the accumulator (acc). 
  // The accumulator starts at 0 and is updated with each iteration. 
  // 'item' represents the current element being processed in the array. 
  // The arrow function (acc, item) => (acc += item) adds the current item to the accumulator. 
  // Finally, after the reduce function has calculated the total sum, we use .toFixed(2) to format the result to two decimal places.
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); 

  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>
    </>
  )
}
