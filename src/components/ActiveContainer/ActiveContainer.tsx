import { Card } from '../Card/Card'
import './../../interfaces/CreditCard'
import './ActiveContainer.scss'

interface Props {
  cards: CreditCard[] | undefined
}

const ActiveContainer = ({ cards }: Props) => {
  const content = () => {
    if (!cards) return <p className="helper-text">No cards saved</p>
    if (!cards.length) return <p className="helper-text">No cards saved</p>
    const activeCard = cards.filter((card) => card.active)
    if (!activeCard.length) return <p className="helper-text">No card active</p>

    return (
      <>
        <p className="helper-text helper-text__title">ACTIVE CARD</p>
        <Card cardInfo={activeCard[0]} />
      </>
    )
  }

  return <div className="activeContainer">{content()}</div>
}
export default ActiveContainer
