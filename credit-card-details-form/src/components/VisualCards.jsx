import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CardContext } from '../context/CardContext'


export default function VisualCards() {
    const {setCard,card} = useContext(CardContext)
    const [spacedNumber,setSpacedNumber] = useState()

    function StringSpaces(cardNumber){
        let pieces = []
        for(let i=0;i<cardNumber.length;i+=4){
            pieces.push(cardNumber.slice(i,i+4))
        }
        return pieces.join(' ')
    }

    useEffect(()=>{
        setSpacedNumber(StringSpaces(card.cardNumber))
    },[card.cardNumber])

    return (
    <div className="cards">
        <div className='cardBack'>
            <span className='visualcvc'>{card.cvc}</span>
        </div>
        <div className='cardFront'>
            <strong className='visualNumber'>{spacedNumber}</strong>
            <span className='visualName'>{card.cardName}</span>
            <span className='visualExpDate'>{`${card.expDateMonth}/${card.expDateYear}`}</span>
        </div>
      </div>
  )
}
