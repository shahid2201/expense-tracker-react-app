import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//Initial State

const initialState = {
    transactions: []
}

//Create context

export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions, //when we use useState, we "initialize a variable state", which is an object that holds data about the components.
            //here we are creating a new variable transactions and accessing the current value of the already existing transactions from state object.
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}