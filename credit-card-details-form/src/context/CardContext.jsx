import { Children, createContext,useState } from "react";

export const CardContext = createContext()

export function CardProvider({children}) {

    const [card,setCard] = useState({
        'cardNumber':"0000 0000 0000 0000",
        'cardName':"KEVIN",
        'expDateMonth':"00",
        'expDateYear':"00",
        'cvc': "000",
        'verified':false
    })

  return (
    <CardContext.Provider value={{
        card,
        setCard
    }}>
        {children}
    </CardContext.Provider>
  )
}
