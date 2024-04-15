import './App.css'
import bgCardFront from "./assets/images/bg-card-front.png"
import bgCardBack from "./assets/images/bg-card-back.png"

function App() {

  return (
    <>
      <div className="cards">
        <div className='cardBack'>
            <span className='visualcvc'>000</span>
        </div>
        <div className='cardFront'>
            <strong className='visualNumber'>0000 0000 0000 0000</strong>
            <span className='visualName'>JANE APPLESEED</span>
            <span className='visualExpDate'>00/00</span>
        </div>
      </div>
      <form method='POST' className='cardForm'>
        <label htmlFor='name'>CARDHOLDER NAME</label>
        <input type='text' id='name' />
        <label htmlFor='number'>CARD NUMBER</label>
        <input type="number" maxLength='16' id='number' />
        <section className='secretData'>
          <div id="expDate">
            <label>EXP. DATE (MM/YY)</label>
            <div>
              <input type='number' maxLength='2' id='expDateMM' placeholder='MM' />
              <input type='number' maxLength='2' id='expDateYY' placeholder='YY' />
            </div>
          </div>
          <div>
            <label htmlFor='cvc'>CVC</label>
            <input type='number' placeholder='e.g. 123' maxLength='3'  className='cvc'/>
          </div>
        </section>
        <input type='submit' value='Confirm' id='submit' />
      </form>
    </>
  )
}

export default App
