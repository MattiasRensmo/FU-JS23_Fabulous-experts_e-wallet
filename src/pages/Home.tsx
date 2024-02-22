import { useState } from 'react'
import { Link } from 'react-router-dom'
import ActiveContainer from '../components/ActiveContainer/ActiveContainer'
// import { Card } from '../components/Card/Card'
import StackCard from '../components/StackCard/StackCard'
import { useLocalStorage } from '../hooks/useLocalStorage'
/* import { Card } from '../components/Card/Card' */
import '../components/Card/Card'



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



/* delete button */
  const deletecard = (): void => {
    // Find the index of the active card
    const activeCardIndex: number = cards.findIndex((card: CreditCard) => card.active);


    // If no active card is found, do nothing
    if (activeCardIndex === -1) return;

    // Filter out the active card and set the new cards array
    const newCards: CreditCard[] = cards.filter((_: CreditCard, index: number) => index !== activeCardIndex);
    setCards(newCards);
  };






  return (
    <div className="add-card-container">
    <main>
      <h1 className='title title__e-wallet' >E-WALLET</h1>
      <button onClick={handleSetClick}>Skapa nytt kort i local storage med testdata</button>
      <button onClick={deletecard}>delete</button>
      <ActiveContainer cards={cards} />

      <StackCard cards={cards} onClick={undefined} />
      <button className='button button__new-card'>
        <Link className='button__text' to="/addcard">ADD A NEW CARD</Link>
      </button>
    </main>
    </div>
  )
}

export default Home
