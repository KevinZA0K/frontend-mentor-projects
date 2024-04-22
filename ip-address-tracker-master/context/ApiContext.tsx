import { createContext, useState } from "react";


export const ApiContext = createContext()

export function ApiProvider({children}){
    const [ipDetails,setIpDetails] = useState({})
    const [status,setStatus] = useState(false) //ESTADO DEL IP INPUT
    const apiKey = import.meta.env.VITE_API_KEY;

    const fetchAPI = (ip) => {
        const details = getAPI(ip)
    }

    const getAPI = (ip) => {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`)
        .then((response) => response.json())
        .then((json) => setIpDetails(json))
        .catch((e) => console.log(e))
    }

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    };


    return ( 
    <ApiContext.Provider value={{
        fetchAPI,
        ipDetails,
        isEmpty,
        status,
        setStatus
    }}>
        {children}
    </ApiContext.Provider>
    )
}
