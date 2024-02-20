import { useState } from 'react' 
import { Card } from '../components/Card/Card'

import { useLocalStorage } from '../hooks/useLocalStorage' 
import  StackCard  from '../components/StackCard/StackCard' 

const cardTest: CreditCard = {
  cardNum: 1234000012340000,
  holderName: 'Test Testsson',
  validYear: 24,
  validMonth: 2,
  vendor: 'evil',
  active: false,
}

const Home = () => {
   const { setLocalItem, getLocalItem } = useLocalStorage('cards')

  //Initierar cards som undefined och fyller den sedan med data - pga får error om att försöka initiera för tidigt annars
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
  );
};

export default Home;
