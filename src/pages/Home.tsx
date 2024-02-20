import { useState } from 'react'
import ActiveContainer from '../components/ActiveContainer/ActiveContainer'
import { Card } from '../components/Card/Card'

import StackCard from '../components/StackCard/StackCard'
import { useLocalStorage } from '../hooks/useLocalStorage'

const cardTest: CreditCard = {
  cardNum: 1234000012340000,
  holderName: 'Test Testsson',
  validYear: 24,
  validMonth: 2,
  vendor: 'bitcoin',
  active: true,
}

const Home = () => {
  const { setLocalItem, getLocalItem } = useLocalStorage('cards')

  //Initierar cards o försöker hämta data från local storage
  const [cards, setCards] = useState<CreditCard[] | undefined>(getLocalItem())

  const handleSetClick = () => {
    //sparar antingen ner nya kortet sist i vår array - eller skapar en helt ny array om det inte finns någon sedan innan
    cards ? setLocalItem([...cards, cardTest]) : setLocalItem([cardTest])

    // Hämtar o visar det vi precis sparade.
    setCards(() => getLocalItem())
  }

  return (
    <main>
      <h1>Home</h1>
      <p>ACTIVE CARD</p>
      <Card />
      <StackCard />
    </main>
  )
}

export default Home
