import React, { useState } from 'react'
import { useContext } from 'react'
import { CardContext } from '../context/CardContext'


export default function CardForm() {

  const { card, setCard } = useContext(CardContext)
  const [error,setError] = useState({
    'cardName':false,
    'cardNumber':false,
    'expDateMonth':false,
    'expDateYear':false,
    'cvc':false
  })

  function handleChange(e) {
    const item = e.target.id
    const value = e.target.value
    try {
      verifyInput(item, value)
      setCard({
        ...card,
        [item]: value
      })

    } catch (e) {
      
    }
  }

  function verifyInput(item, value) {
    switch (item) {
      case 'cardName':
        if (value.length > 32) {
          setError({
           ...error,
           'cardName':true
          })
          throw new Error("")
        }else{
          resetError('cardName')
        }
        break;
      case 'cardNumber':
        if (value.length > 16) {
          setError({
            ...error,
            'cardNumber':true
          })
          throw new Error("")
        }else{
          resetError('cardNumber')
        }
        break;
      case 'expDateMonth':
        if(value.length > 2) {
          setError({
            ...error,
            'expDateMonth' : true
          })
          throw new Error("")
        }else{
          resetError('expDateMonth')
        }
        break;
      case 'expDateYear':
        if(value.length > 2){
          setError({
           ...error,
           'expDateYear' : true
          })
          throw new Error("")
        }else{
          resetError('expDateYear')
        }
        break;
      case 'cvc':
        if(value.length > 3){
          setError({
            ...error,
            'cvc':true
          })
          throw newError("")
        }else{
          resetError('cvc')
        }
        break;
        default:
          break;

    }
  }

  function handleSubmit(e){
    e.preventDefault();
    if(verifyError(error)){
      setCard({
        ...card,
        'verified':true
      })
    }
  }


  function resetError(errorItem){
    setError({
      ...error,
      [errorItem]:false
    })    
  }

  function verifyError(error){
    for(let e in error){
      if(error[e]){
        throw new Error("Something is wrong!")
      }else{
        return true
      }
    }
  }

  return (
    <form method='POST' className='cardForm' onSubmit={(e)=> handleSubmit(e)}>
      <label htmlFor='cardName'>CARDHOLDER NAME</label>
      <input type='text' id='cardName' className={error.cardName ? "error":""} onChange={(e) => handleChange(e)} required/>
      <label htmlFor='cardNumber'>CARD NUMBER</label>
      <input type="number" maxLength='16' id='cardNumber' className={error.cardNumber ? "error":""} onChange={(e) => handleChange(e)}
      required
      />
      <section className='secretData'>
        <div id="expDate">
          <label>EXP. DATE (MM/YY)</label>
          <div>
            <input required type='number' id='expDateMonth' className={error.expDateMonth ? "error":""} placeholder='MM' onChange={(e) => {
              handleChange(e)
            }} />
            <input required type='number' id='expDateYear' className={error.expDateYear ? "error":""} placeholder='YY' onChange={(e) => handleChange(e)} />
          </div>
        </div>
        <div>
          <label htmlFor='cvc'>CVC</label>
          <input required type='number' placeholder='e.g. 123' className={error.cvc ? "error":""} maxLength='3' id='cvc' onChange={(e) => handleChange(e)} />
        </div>
      </section>
      <input type='submit' value='Confirm' id='submit'/>
    </form>
  )
}