import React,{createContext, useReducer} from "react";
import AppReducer from "./AppReducer"


// INITIAL STATE

const initialState = {
    transactions: [
        // {
        //     id: 1, 
        //     text: "Flowers",
        //     amount: -10
        // },

        // {
        //     id: 2,
        //     text: "Salary",
        //     amount: 500
        // },

        // {
        //     id: 3,
        //     text: "Petrol",
        //     amount: -10
        // },

        // {
        //     id: 4,
        //     text: "Recharge",
        //     amount: -30
        // },

    ]
}


// CREATING A GLOBAL CONTEXT
export const GlobalContext = createContext(initialState)



// CREATING A GLOBAL PROVIDER
export const GlobalProvider = (props) =>{


    // WITH IN THE GLOBAL PROVIDER WE ARE CREATING A REDUCER SO THAT IT CAN DISPATCH THE ACTIONS TO ITS CHILDREN COMPONENTS
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}