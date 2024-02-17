import '../../interfaces/CreditCard'
import './Card.scss'

interface iProps {
  cardInfo: CreditCard
}

export const Card = ({ cardInfo }: iProps) => {
  return (
    <div className="card">
      Card
      {/* {console.log(cardInfo)} */}
      <p>Number: {(cardInfo.cardNum.toString().match(/(\d{4})/g) || []).join(' ')}</p>
      <p>Name: {cardInfo.holderName}</p>
    </div>
  )
}
