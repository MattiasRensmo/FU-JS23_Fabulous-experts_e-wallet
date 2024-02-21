
import '../../interfaces/CreditCard'
/* import  Card from './Card'; */

import { Card } from '../Card/Card'
import './StackCard.scss'

interface Props {
  cards: CreditCard[] | undefined
}

const StackCard = ({ cards }: Props) => {
  // EN funktion som bestämmer vilket kort som ska va aktivt o gör alla andra kort inaktiva

  if (!cards) return <></>
  if (!cards.length) return <></>

  return (
    <div className="card-list-wrap">
      {cards.map((card) => (
        <div className="card-stack stacked-card">
          <Card cardInfo={card}></Card>
        </div>
      ))}
    </div>
  )
}



export default StackCard

