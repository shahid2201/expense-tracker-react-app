import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//Initial State

const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Flowerr', amount: -60},
        {id: 3, text: 'Flowerrr', amount: 20},
        {id: 4, text: 'Flowerrrr', amount: 40}
    ]
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

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions, //when we use useState, we "initialize a variable state", which is an object that holds data about the components.
            //here we are creating a new variable transactions and accessing the current value of the already existing transactions from state object.
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}