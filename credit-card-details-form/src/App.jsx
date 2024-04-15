import { useContext } from 'react'
import './App.css'
import Accepted from './components/Accepted'
import CardForm from './components/CardForm'
import VisualCards from './components/VisualCards'
import { CardContext } from './context/CardContext'

function App() {
  const { card, setCard } = useContext(CardContext)
  console.log(card.verified)
  return (
    <>

      <div id='container'>
        <VisualCards />
        {!card.verified ? <CardForm />:<Accepted />}
      </div>

    </>
  )
}

export default App
