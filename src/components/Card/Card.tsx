import '../../interfaces/CreditCard'
import chipBlip from './../../assets/img/chipBlip.svg'

import './Card.scss'

interface Props {
  cardInfo: CreditCard
}

function groupByFour(num: string) {
  return num.replace(/(.{4})/g, '$1 ').trim()
}

export const Card = ({ cardInfo }: Props) => {
  return (
    <article
      className={cardInfo.vendor ? `card card--${cardInfo.vendor}` : `card`}>
      <section className="card__top">
        <img src={chipBlip} alt="Credit card chip" />{' '}
        <div className="card__top__logo">
          <img src={`/logo/${cardInfo.vendor}.svg`} alt="" />
        </div>
      </section>
      <section className="card__num">
        {cardInfo.cardNum
          ? groupByFour(cardInfo.cardNum.padEnd(16, 'X'))
          : groupByFour('XXXXXXXXXXXXXXXX')}
      </section>
      <section className="card__btm">
        <div className="card__btm__item">
          <p className="card__btm__item__heading">Cardholder Name</p>
          <p className="card__btm__item__text">
            {cardInfo.holderName ? cardInfo.holderName : 'FIRSTNAME LASTNAME'}
          </p>
        </div>
        <div className=" card__btm__item card__btm__item--right">
          <p className="card__btm__item__heading">Valid Thru</p>
          <p className="card__btm__item__text">
            {cardInfo.validMonth
              ? `${(cardInfo.validMonth + '').padStart(2, '0')}/${(
                  cardInfo.validYear + ''
                ).padStart(2, '0')}`
              : 'MM/YY'}
          </p>
        </div>
      </section>
    </article>
  )
}
