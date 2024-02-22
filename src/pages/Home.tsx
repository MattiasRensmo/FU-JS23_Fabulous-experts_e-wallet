import { useState } from 'react'
import { Link } from 'react-router-dom'
import ActiveContainer from '../components/ActiveContainer/ActiveContainer'
import '../components/Card/Card'
import StackCard from '../components/StackCard/StackCard'
import { useLocalStorage } from '../hooks/useLocalStorage'

const Home = () => {
  const { setLocalItem, getLocalItem } = useLocalStorage('cards')

  //Initierar cards o försöker hämta data från local storage
  const [cards, setCards] = useState<CreditCard[] | undefined>(getLocalItem())

  /* delete button */
  const deleteCard = (): void => {
    const newC = cards?.filter((card) => !card.active)
    setCards(newC)
    setLocalItem(newC)
  }

  const handleChangeActive = (activeCard: CreditCard) => {
    console.log(activeCard)

    const NewCards = cards?.map((card) => {
      if (card.cardNum === activeCard.cardNum) {
        return { ...card, active: true }
      } else {
        return { ...card, active: false }
      }
    })
    setCards(NewCards)
    setLocalItem(NewCards)
  }

  return (
    <div className="add-card-container">
      <main>
        <h1 className="title title__e-wallet">E-WALLET</h1>
        <ActiveContainer cards={cards} />
        <button className="Delete__Btn" onClick={deleteCard}>
          Delete card
        </button>

        <StackCard cards={cards} onChangeActive={handleChangeActive} />
        <button className="button button__new-card">
          <Link className="button__text" to="/addcard">
            ADD A NEW CARD
          </Link>
        </button>
      </main>
    </div>
  )
}

export default Home
