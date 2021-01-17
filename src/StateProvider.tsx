import React, { createContext, useContext, useReducer } from 'react'

export interface StateProviderProps {
    reducer: any
    initialState: any
    children: any
}

export const StateContext = createContext<any | null>(null);

export const StateProvider = ({ reducer, initialState, children}: StateProviderProps) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);