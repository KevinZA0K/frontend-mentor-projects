import { createContext } from "react";
import { useApi } from "../hooks/useAPI";


export const ApiContext = createContext()

export function ApiProvider({children}){

    const api = useApi()

    return ( 
    <ApiContext.Provider value={{
        api
    }}>
        {children}
    </ApiContext.Provider>
    )
}
