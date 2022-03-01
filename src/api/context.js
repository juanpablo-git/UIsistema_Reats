import React,{createContext} from "react"

const Context = createContext(0)

function Hystory({children}){

    return (
        <Context.Provider>
        {children}
        </Context.Provider>
    )
}

export {Context,Hystory}