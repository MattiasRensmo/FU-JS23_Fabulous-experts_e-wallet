import React from 'react'
import '../../interfaces/CreditCard'
/* import  Card from './Card'; */

import { Card } from '../Card/Card'
import './StackCard.scss'

interface Props {
  cards: CreditCard[] | undefined
}

const StackCard = ({ cards }: Props) => {
  const StackCard_Styles = (): React.CSSProperties => {
    return {
      marginBottom: '-12rem',
    }
  }

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
