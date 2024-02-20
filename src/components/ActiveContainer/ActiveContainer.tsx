import { Card } from '../Card/Card'
import './../../interfaces/CreditCard'
import './ActiveContainer.scss'

interface Props {
  cards: CreditCard[] | undefined
}

const ActiveContainer = ({ cards }: Props) => {
  if (!cards) return <p>No cards saved</p>
  if (!cards.length) return <p>No cards saved</p>
  const activeCard = cards.filter((card) => card.active)
  if (!activeCard.length) return <p>No card active</p>

  return (
    <div className="activeContainer">
      <p className="helperText">ACTIVE CARD</p>
      <Card cardInfo={activeCard[0]} />
    </div>
  )
}
export default ActiveContainer
