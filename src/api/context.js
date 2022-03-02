import React,{createContext,useState} from "react"

const Context = createContext(0)

function Hystory({children}){
    const [logado,setLogado] = useState(false)

    return (
        <Context.Provider value={{logado,setLogado}}>
        {children}
        </Context.Provider>
    )
}

export {Context,Hystory}