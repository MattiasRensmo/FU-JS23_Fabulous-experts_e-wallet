import { Card } from '../Card/Card'
import './StackCard.scss'

interface Props {
  cards: CreditCard[] | undefined
  onChangeActive: (card: CreditCard) => void
}

const StackCard = ({ onChangeActive, cards }: Props) => {
  // EN funktion som bestämmer vilket kort som ska va aktivt o gör alla andra kort inaktiva

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
