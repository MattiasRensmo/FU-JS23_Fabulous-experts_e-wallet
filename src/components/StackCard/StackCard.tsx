import { Card } from '../Card/Card'
import './StackCard.scss'

interface Props {
  cards: CreditCard[] | undefined
  onChangeActive: (card: CreditCard) => void
}

const StackCard: React.FC<Props> = ({ onChangeActive, cards }: Props) => {
  // EN funktion som bestämmer vilket kort som ska va aktivt o gör alla andra kort inaktiva

  /*   const activateCard = (cardId: any) => { // Loop through the cards array and set the active property to true for the clicked card and false for the others
   const newCards = cards.map((card) => {
     if (card.id === cardId) {
       return { …card, active: true }; 
      } else { return { …card, active: false };
     } }); // Set the new cards array 
     setCards(newCards);
     }; 
 */

  if (!cards) return <></>
  if (!cards.length) return <></>

  return (
    <div className="card-list-wrap">
      {cards.map((card) =>
        card.active ? (
          ''
        ) : (
          <div
            onClick={() => onChangeActive(card)}
            className="card-stack stacked-card"
            key={card.cardNum}>
            <Card cardInfo={card}></Card>
          </div>
        )
      )}
    </div>
  )
}

export default StackCard
